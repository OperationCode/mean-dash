/* You could also export multiple functions (or classes) from one file. */

export default class TextFilters {

	UpperFilter() {
		return function(input) {
			return input.toUpperCase()
		}
	}

	LowerFilter() {
		return function(input) {
			return input.toLowerCase()
		}
	}
}
