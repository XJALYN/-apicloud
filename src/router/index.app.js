
const generateUrl = (path) => {
    let url = path.replace(/\//g, '') + '.html'
    return url
}

const push = ({ path, params, name }) => {
    window.api.openWin({
        name: name,
        url: generateUrl(path),
        pageParam: params
    });
}
const replace = ({ path, params, name }) => {
    window.api.openWin({
        name: name,
        url: generateUrl(path),
        pageParam: params
    });
}
const back = () => {
    window.api.closeWin({})
}

export default {
    push,
    replace,
    back
}