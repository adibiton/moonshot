'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('CRUD /api/questions', function() {

	// router.get('/', controller.index);
	it('should respond with JSON array (get)', function(done) {
		request(app)
			.get('/api/questions')
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
			if (err) return done(err);
				res.body.should.be.instanceof(Array);
				done();
		  	});
	});

	// router.post('/', controller.create);
	it('should response with 201 for create new question (post)', function(done){
		request(app)
			.post('/api/questions/')
			.send({title: 'Who moved my cheese?', description: '..'})
			.expect(201)
			.end(done);
	});

	// router.get('/:id', controller.show);
	it('should return a question for request with an id (get:id)', function(done){
		request(app)
			.post('/api/questions/')
			.send({title: 'Why did you moved my cheese?', description:'...'})
			.expect(201)
			.end(function(err, res){
				checkQuestion(res.body._id);
			});
		
		function checkQuestion(id){
			request(app)
			.get('/api/questions/' + id)
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
			if (err) return done(err);
				res.body.should.have.property('title', 'Why did you moved my cheese?');
				done();
		  	});
		 };				
	})

	//router.put('/:id', controller.update);
	it('should update a question with updated data sent (put:id)', function(done){
		request(app)
			.post('/api/questions/')
			.send({title: 'Why did you moved my cheese?', description:'...'})
			.expect(201)
			.end(function(err, res){
				updateQuestion(res.body._id);
			});

		function updateQuestion(id){
			request(app)
			.put('/api/questions/' + id)
			.send({title: 'What is your name?', description:'...'})
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
			if (err) return done(err);
				res.body.should.have.property('title', 'What is your name?');
				done();
		  	});
		 };		
	});

	// router.patch('/:id', controller.update);
	it('should update a question partially with updated data sent (put:id)', function(done){
		request(app)
			.post('/api/questions/')
			.send({title: 'Why did you moved my cheese?', description:'my question'})
			.expect(201)
			.end(function(err, res){
				updateQuestionPartially(res.body._id);
			});

		function updateQuestionPartially(id){
			request(app)
			.put('/api/questions/' + id)
			.send({title: 'What is your name?'})
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
			if (err) return done(err);
				res.body.should.have.property('title', 'What is your name?');
				res.body.should.have.property('description', 'my question');
				done();
		  	});
		 };		
	});
	
	//router.delete('/:id', controller.destroy);
	it('should response with 204 for deleted question (delete:id)', function(done){
		request(app)
			.post('/api/questions/')
			.send({title: 'Why did you moved my cheese?', description:'my question'})
			.expect(201)
			.end(function(err, res){
				deleteQuestion(res.body._id);
			});

		function deleteQuestion(id){
			request(app)
			.delete('/api/questions/' + id)
			.send({title: 'What is your name?'})
			.expect(204)
			.end(function(err, res) {
			if (err) return done(err);
				done();
		  	});
		 };		
	});
});