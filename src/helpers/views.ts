export const formatViews = (views: number) => {
    if (views < 1000) {
        return views;
    }
    let si = [
        {v: 1E3, s: "K"},
        {v: 1E6, s: "M"},
        {v: 1E9, s: "B"},
        {v: 1E12, s: "T"},
        {v: 1E15, s: "P"},
        {v: 1E18, s: "E"}
    ];

    let index;
    for (index = si.length - 1; index >= 0; index--) {
        
        if (views >= si[index].v) {
            break;
        }
    }

    let result = (views / si[index].v).toFixed(2)

    const afterPoint = result.slice(-2);

    if (parseInt(afterPoint) === 0) {
        result = result.slice(0, result.length - 3)
    } else if (parseInt(afterPoint[afterPoint.length - 1]) === 0) {
        result = result.slice(0, result.length - 1)
    }

    return `${result}${si[index].s}`;
}