
interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(profile: Profile, updates: Profile): Profile {
    return { ...profile, ...updates };
  }
  
  const myProfile: Profile = { name: "Persian Boss", age: 50, email: "dadha@ph.com" };
  