import { Editor, Transforms, Element as SlateElement, Range } from 'slate'
import { TEXT_ALIGN_TYPES, LIST_TYPES, CODE_STYLES } from '../constants'

export function getActiveStyles(editor) {
  return new Set(Object.keys(Editor.marks(editor) ?? {}))
}

export function toggleStyle(editor, style) {
  const activeStyles = getActiveStyles(editor)
  if (activeStyles.has(style)) {
    Editor.removeMark(editor, style)
  } else {
    Editor.addMark(editor, style, true)
  }
}

export const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

export const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

export const isBlockActive = (editor, format, blockType = 'type') => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    }),
  )

  return !!match
}

export const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
  )

  const isList = LIST_TYPES.includes(format)
  const isCode = CODE_STYLES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      (LIST_TYPES.includes(n.type) || CODE_STYLES.includes(n.type)) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  })

  let newProperties
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    }
  } else {
    let type = format
    // if removing format, set it back to default type - paragraph
    if (isActive) {
      type = 'paragraph'
    } else {
      // node should be a item (<li />) if their parrent is a list
      // node should be a block if their parrent is a code line
      type = isList ? 'list-item' : isCode ? 'code-line' : type
    }

    newProperties = {
      type,
    }
  }
  Transforms.setNodes(editor, newProperties)

  if (!isActive && (isList || isCode)) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

export function getTextBlockStyle(editor) {
  const selection = editor.selection
  if (selection == null) {
    return ''
  }
  // gives the forward-direction points in case the selection was
  // was backwards.
  const [start, end] = Range.edges(selection)

  // path[0] gives us the index of the top-level block.
  let startTopLevelBlockIndex = start.path[0]
  const endTopLevelBlockIndex = end.path[0]

  let blockType = ''
  while (startTopLevelBlockIndex <= endTopLevelBlockIndex) {
    const [node, _] = Editor.node(editor, [startTopLevelBlockIndex])
    if (blockType === '') {
      blockType = node.type
    } else if (blockType !== node.type) {
      return 'multiple'
    }
    startTopLevelBlockIndex++
  }

  return blockType
}

export function toggleBlockType(editor, blockType) {
  const currentBlockType = getTextBlockStyle(editor)
  const changeTo = currentBlockType === blockType ? 'paragraph' : blockType
  Transforms.setNodes(
    editor,
    { type: changeTo },
    // Node filtering options supported here too. We use the same
    // we used with Editor.nodes above.
    { at: editor.selection, match: (n) => Editor.isBlock(editor, n) },
  )
}
