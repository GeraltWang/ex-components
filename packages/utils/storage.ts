export default {
	/**
	 * 本地存储 setItem
	 * @param {*} key
	 * @param {*} data
	 * @param {*} dateTime 0 永久有效 单位秒
	 * @returns
	 */
	set(key: string, data: any, dateTime: number = 0) {
		let cacheValue = {
			content: data,
			dateTime:
				parseInt(dateTime as unknown as string) === 0
					? 0
					: new Date().getTime() + parseInt(dateTime as unknown as string) * 1000,
		}
		return localStorage.setItem(`${key}`, JSON.stringify(cacheValue))
	},
	/**
	 * 本地存储 getItem
	 * @param {*} key
	 * @returns
	 */
	get(key: string) {
		try {
			const valueFromStorage = localStorage.getItem(`${key}`)
			if (!valueFromStorage) {
				return null
			}
			const value = JSON.parse(valueFromStorage)
			if (value) {
				let nowTime = new Date().getTime()
				if (nowTime > value.dateTime && value.dateTime != 0) {
					localStorage.removeItem(`${key}`)
					return null
				}
				return value.content
			}
			return null
		} catch (err) {
			return null
		}
	},
	/**
	 * 本地存储 removeItem
	 * @param {*} key
	 * @returns
	 */
	remove(key: string) {
		return localStorage.removeItem(`${key}`)
	},
	/**
	 * 本地存储 clear
	 * @returns
	 */
	clear() {
		return localStorage.clear()
	},
	setSession(key: string, data: any, dateTime = 0) {
		let cacheValue = {
			content: data,
			dateTime: Number(dateTime) === 0 ? 0 : new Date().getTime() + Number(dateTime) * 1000,
		}
		return sessionStorage.setItem(`${key}`, JSON.stringify(cacheValue))
	},
	getSession(key: string) {
		try {
			const valueFromStorage = sessionStorage.getItem(`${key}`)
			if (!valueFromStorage) {
				return null
			}
			const value = JSON.parse(valueFromStorage)
			if (value) {
				let nowTime = new Date().getTime()
				if (nowTime > value.dateTime && value.dateTime != 0) {
					sessionStorage.removeItem(`${key}`)
					return null
				}
				return value.content
			}
			return null
		} catch (err) {
			return null
		}
	},
	removeSession(key: string) {
		return sessionStorage.removeItem(`${key}`)
	},
	clearSession() {
		return sessionStorage.clear()
	},
}
