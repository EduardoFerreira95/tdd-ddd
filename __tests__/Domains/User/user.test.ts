import {User} from '../../../src/core/models/domain/User/User';
describe('User test', () => {
  it('should be able to create an user', () => {
    const user = new User({name: 'Jhon Doe', email: 'jhon.doe@doe.com'});

    expect(user.getName()).toEqual('Jhon Doe');
    expect(user.getEmail()).toEqual('jhon.doe@doe.com');
    expect(user).toHaveProperty('id');
  });
});
