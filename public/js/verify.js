export function verify(type, val, tips, success, error) {
    var oReg = {
        user: [
            [/^\S{6,12}$/, "用户名需要在6-12位之间"],
            [/^[^0-9]/, "用户名不能以数字开头"],
            [/^[\w$]+$/, "用户名由数字、字母、下划线、$组成"],
        ],
        pwd: [/^[0-9a-zA-Z_$]{6,12}$/, "密码由数字、字母、下划线、$组成,6-12位"],
        phone: [/^1[3-9]\d{9}$/, "手机号格式有误"],
        email: [/^[a-zA-Z]\w{4,16}[0-9a-zA-Z]@(\w+\.){1,2}(com|net)$/, "邮箱格式有误"],
    }
    var rules = null;
    if (typeof type === "string") rules = oReg[type]  //使用函数内置规则
    else if (Array.isArray(type)) rules = type;   //自定义规则
    else return false;

    if (!rules) return false;

    var item1 = rules[0]; // 判断是否是二维数组
    var isMultiple = Array.isArray(item1);


    if (isMultiple) {
        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            if (!rule[0].test(val)) { // rule[0].test(val) === false
                if (tips) {
                    tips.textContent = rule[1];
                }
                error && error(rule[1]);
                return false;
            }

        }
        if (tips && !success) {
            tips.textContent = "√";
        }
        success && success();
        // if(success){
        //     success();
        // }
        return true;
    } else {
        // 一维数组
        if (rules[0].test(val)) {
            tips.textContent = "√";
            success && success();
            // if(success){
            //     success();
            // }
            return true;
        } else {
            if (tips && !error) {
                tips.textContent = rules[1];
            }
            error && error(rules[1]);
            return false;
        }
    }



    return false;

}


