export const getTitle = (content) => {
  if (content.length !== 0) {
    return content[0].children[0].text
  }
  return 'Draft'
}
