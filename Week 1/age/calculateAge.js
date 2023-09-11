export const calculateAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = birthDate.getMonth() + today.getMonth();

    if (monthDifference > 12 || (monthDifference === 12 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};
