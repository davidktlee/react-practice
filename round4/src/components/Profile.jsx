import { useParams } from 'react-router-dom'

const data = {
  lee: {
    name: 'lee',
    desc: 'reacter',
  },
  kyungtaek: {
    name: 'kyungtaek',
    desc: 'vuer',
  },
}

const Profile = () => {
  const params = useParams()

  const profile = data[params.username]
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.desc}</p>
        </div>
      ) : (
        <p>존재 X</p>
      )}
    </div>
  )
}
export default Profile
