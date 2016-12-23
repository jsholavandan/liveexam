import * as express from 'express';
import * as mongoose from 'mongoose';
import Student from '../models/student';

let router = express.Router();

router.get('/', (req, res) => {
  Student.find().then((students) => {
    res.json(students);
  }).catch((err) => {
    console.log(err);
    res.status(500);
  });
});

router.get('/:id', (req, res) => {
  let id= req.params.id;

  Student.findById(id).then((student) => {
    res.json(student);
  }).catch((err) => {
    res.status(404);
  });
});

router.post('/', (req, res) => {
  let obj = req.body;

  Student.create(obj).then((newStudent) => {
    res.json(newStudent);
  }).catch((err) => {
    res.status(500);
  });
});

router.post('/:id', (req, res) => {
  let id = req.params.id;

  Student.findById(id).then((student) => {

    student.name = req.body.name;
    student.class = req.body.class;
    student.marks = req.body.marks;
    student.save().then((student) => {
      res.json(student);
    }).catch((err) => {
      res.status(500);
    });
  });
});

router.delete('/:id', (req, res) => {
  let id= req.params.id;

  Student.findById(id).then((student) => {
    student.remove().then((removed) => {
      res.json(removed);
    }).catch((err) => {
      res.status(500);
    });
  });
});

export default router;
