class Helpers {
	constructor(params) {
		this.params = params
	}

	toRem = size => {
		const baseSize = 16

		if (typeof this.params === 'number') {
			size = this.params
		}

		return `${size / baseSize}rem`
	}

	defaultColors = () => {
		const colorMap = [
			{'black': {'hex': '#000000'}},
			{'white': {'hex': '#ffffff'}},
			{'yellow': {'hex': '#ffff00'}},
			{'neumorphicBg': {'hex': '#e0e0e0'}},
			{'evenRows': {'hex': '#999999'}}
		]

		let convertThis = null

		colorMap.forEach((color) => {
			if (Object.keys(color)[0] === this.params) {
				convertThis = color[this.params].hex
				return false
			}
		})

		const hexToRgb = hex => {
			return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
				.substring(1).match(/.{2}/g)
				.map(x => parseInt(x, 16))
		}

		return hexToRgb(convertThis).toString()
	}

	respondTo = () => {
		const breakpoints = [
			{'small': {'size': this.toRem(600)}},
			{'medium': {'size': this.toRem(768)}},
			{'large': {'size': this.toRem(1024)}},
			{'xlarge': {'size': this.toRem(1280)}},
			{'epic': {'size': this.toRem(1400)}}
		]

		let output = null

		breakpoints.forEach((breakpoint) => {
			if (Object.keys(breakpoint)[0] === this.params) {
				output = `@media screen and (min-width: ${breakpoint[this.params].size})`
				return false
			}
		})

		return output
	}
}

export default Helpers