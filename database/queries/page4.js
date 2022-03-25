const question = {
    list: `SELECT * FROM questions  `,
    list1: `  SELECT * FROM questions q , answer a WHERE q.question_num=a.q1 AND a.num = (SELECT num from answer ORDER BY ID DESC LIMIT 1) AND a.q3="user1" `,
    list2: `  SELECT * FROM questions q , answer a WHERE q.question_num=a.q1 AND a.num = (SELECT num from answer ORDER BY ID DESC LIMIT 1) AND a.q3="user2" `,
    list3: `  SELECT * FROM questions q , answer a WHERE q.question_num=a.q1 AND a.num = (SELECT num from answer ORDER BY ID DESC LIMIT 1) AND a.q3="user3" `,


}
    module.exports = question;
    