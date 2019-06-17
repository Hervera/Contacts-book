import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import dummy from './dummy';
import server from '../server';

chai.should();
chai.use(chaiHttp);

dotenv.config();

describe('Contact Endpoints', () => {
  it('Should create a contact', (done) => {
    chai.request(server)
      .post('/contacts')
      .send(dummy.newContact)
      .set('Accept', 'Application/JSON')
      .end((err, res) => {
        res.body.should.be.an('Object');
        res.body.should.have.property('status').equal(201);
        res.body.should.have.property('data');
        res.body.data.should.be.an('object');
        done();
      });
    // .catch((err) => {
    //   done(err);
    // });
  });
});
