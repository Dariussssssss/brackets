module.exports =
    function check(str, bracketsConfig) {
        if (str.length % 2 !== 0) return false;
        let string = '';
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < bracketsConfig.length; j++) {
                if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1] && string[string.length - 1] === bracketsConfig[j][0]) {
                    string = string.slice(0, -1)
                } else if (str[i] === bracketsConfig[j][0]) {
                    string += str[i];
                } else if (str[i] === bracketsConfig[j][1] && string[string.length - 1] === bracketsConfig[j][0]) {
                    string = string.slice(0, -1)
                }
            }
        }
        return string.length === 0
    }
