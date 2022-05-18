import { Link, Route } from 'react-router-dom'
import Profile from './Profile'

const Profiles = () => {
  return (
    <div>
      <h3>시용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/lee">lee</Link>
        </li>
        <li>
          <Link to="profiles/kyungtaek">kyungtaek</Link>
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>사용자를 선택</div>} />
      <Route path="/profiles/:username" element={<Profile />} />
    </div>
  )
}
export default Profiles
