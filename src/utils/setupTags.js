const setupTags = recipes => {
  const tags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (tags[tag]) {
        tags[tag] = tags[tag] + 1
      } else {
        tags[tag] = 1
      }
    })
  })

  const newTags = Object.entries(tags)

  newTags.sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b

    return firstTag.localeCompare(secondTag)
  })

  return newTags
}

export default setupTags
