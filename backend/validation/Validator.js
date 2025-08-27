import isEmail from "validator/lib/isEmail.js";

const validator = function(validationSchema){
    return function(req, res, next){
        
        const errors = {}
        let hasError = false;

        

        for(let field in validationSchema){

            errors[field] = {}
            const fieldFromBody = req.body[field]

            const ruleObj = validationSchema[field]
            
            for(let rule in ruleObj){
                if(rule === "required" && ruleObj["required"].value === true && (fieldFromBody === undefined || fieldFromBody === null || fieldFromBody.trim() === "")){
                    errors[field]["required"] = ruleObj["required"].error_msg
                    hasError = true
                }

                if(rule === "email" && ruleObj["email"].value === true && !isEmail(fieldFromBody) && errors[field]["required"] === undefined){
                    errors[field]["email"] = ruleObj["email"].error_msg
                    hasError = true
                }

                if(rule === "minLen" && fieldFromBody.trim().length < ruleObj["minLen"].value && errors[field]["required"] === undefined){
                    errors[field]["minLen"] = ruleObj["minLen"].error_msg
                    hasError = true
                }
            }
        }

        if(hasError){
            return res.status(400).json({errors: errors})
        }
        
        return next()
    }
}

export default validator