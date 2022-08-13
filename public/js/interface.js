import "./jquery-3.6.0.min.js";
let baseUrl = "";
function request(url, params = {}, type = "get") {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: type,
            url: url,
            data: params,
            dataType: "json",
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        })
    })
}

export let isExistUser = params => request(baseUrl + "/account/user", params, "get");
export let isExistPwd = params => request(baseUrl + "/account/pwd", params, "get");
export let isExistPhone = params => request(baseUrl + "/account/phone", params, "get");
export let isExistEmail = params => request(baseUrl + "/account/email", params, "get");
export let register = params => request(baseUrl + "/account/sign", params, "post");
export let login = params => request(baseUrl + "/account/login", params, "post");
export let loginAccount = params => request(baseUrl + "/account/loginAccount", params, "post");


export let searchAllGrade = params => request(baseUrl + "/grade", params,);
export let searchGradeOrderLimit = params => request(baseUrl + "/grade/searchOrderLimit", params,);
export let searchGradeById = params => request(baseUrl + "/grade/searchById", params,);
export let deleteGradeById = params => request(baseUrl + "/grade/deleteById", params,);
export let updateGradeById = params => request(baseUrl + "/grade/updateById", params, "post");

export let getALLGoods = params => request(baseUrl + "/goods/list", params,);
export let searchGoodsByGid = params => request(baseUrl + "/goods/search", params);

export let addToCart = params => request(baseUrl + "/cart/buy", params, "post");
export let searchCart = params => request(baseUrl + "/cart/search", params, );



