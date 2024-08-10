1.//Find all the topics and tasks which are thought in the month of October
  db.topics.find({date:{$regex:"2020-10"}});

2.//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.createCollection("drives")
db.drives.insertMany([
  { company: "CompanyA", course: "computer", drive_date: new Date("2020-10-16") },
  { company: "CompanyB", course: "mechanical", drive_date: new Date("2020-10-10") },
  { company: "CompanyC", course: "computer", drive_date: new Date("2020-10-20") },
  { company: "CompanyD", course: "electrical", drive_date: new Date("2020-10-08") },
  { company: "CompanyE", course: "computer", drive_date: new Date("2020-10-25") }
])
db.drives.find({ 
  course: "computer",
  drive_date: {
    $gte: new Date("2020-10-15"),
    $lte: new Date("2020-10-31")
  }
}).pretty()

3.//Find all the company drives and students who are appeared for the placement.

db.drives.find({is_appeared:true})
db.users.find({is_appeared:"true"})

4.//Find the number of problems solved by the user in codekata
db.codekata.aggregate({$project:{
  name:1,_id:0,
  solved_problems:{
  $add:["$Input/Output","$Absolute_beginner","$Array","$mathematics","$strings"]
  }
}})

5.//Find all the mentors with who has the mentee's count more than 15

db.mentors.find({mentee:{$gte:15}},{_id:0,name:1,role:1,mentee:1})

6.//Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendence.find({status:"absent",lastUpdate:{$gte: new Date("2020-10-15"),$lte: new Date("2020-10-31")}})
db.task.find({status:"not submitted",lastUpdate:{$gte: new Date("2020-10-15"),$lte: new Date("2020-10-31")}})




