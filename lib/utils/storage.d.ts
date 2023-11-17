declare const _default: {
    /**
     * 本地存储 setItem
     * @param {*} key
     * @param {*} data
     * @param {*} dateTime 0 永久有效 单位秒
     * @returns
     */
    set(key: string, data: any, dateTime?: number): void;
    /**
     * 本地存储 getItem
     * @param {*} key
     * @returns
     */
    get(key: string): any;
    /**
     * 本地存储 removeItem
     * @param {*} key
     * @returns
     */
    remove(key: string): void;
    /**
     * 本地存储 clear
     * @returns
     */
    clear(): void;
    setSession(key: string, data: any, dateTime?: number): void;
    getSession(key: string): any;
    removeSession(key: string): void;
    clearSession(): void;
};
export default _default;
