
const question = {
    list: `SELECT * FROM question `,

    question: (id)=>{
        return `SELECT * FROM question WHERE question.id=${id}`
    },

    edit: (data)=>{
        return `UPDATE question SET 
        idname='${data.idname}',
        name='${data.name}',
        question='${data.question}'
        
        WHERE question.id=${data.id}`
    },

    delete: (id)=>{
        return `DELETE From question  WHERE question.id=${id}`
    },

    add: (data)=>{
        return `INSERT INTO question
        (id, idname, name, question) VALUES
        (NULL,'${data.idname}', '${data.name}', '${data.question}')`
    }
}
module.exports = question;

