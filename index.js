function superbowlWin(record) {

    let item = record.find(object => object.result === "W")
    if (item) {
        return item.year
    }
}








