import users from '../../../json/users.json'
export default function handler(req, res) {
  res.status(200).json(users);
}
