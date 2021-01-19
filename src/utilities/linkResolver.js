const linkResolver = ({ node, key, value }) => doc => {
	if (doc.uid === 'home') {
		return '/'
	  } else {
		return `/${doc.uid}`
	  }
}

module.exports = linkResolver