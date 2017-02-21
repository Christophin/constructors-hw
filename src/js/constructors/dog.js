function Dog (options) {
    options = options || {};
    this.color = options.color;
    this.hungry =  (options.hungry == undefined) ? true : options.hungry;
    this.status = 'normal';
    this.owner = options.owner;
}

export { Dog };
