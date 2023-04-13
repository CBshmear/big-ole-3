export const getSavedCampIds = () => {
  const savedCampIds = localStorage.getItem("saved_camps")
    ? JSON.parse(localStorage.getItem("saved_camps"))
    : [];

  return savedCampIds;
};

export const saveCampIds = (campIdArr) => {
  if (campIdArr.length) {
    localStorage.setItem("saved_camps", JSON.stringify(campIdArr));
  } else {
    localStorage.removeItem("saved_camps");
  }
};

export const removeCampId = (campgroundId) => {
  const savedCampIds = localStorage.getItem("saved_camps")
    ? JSON.parse(localStorage.getItem("saved_camps"))
    : null;

  if (!savedCampIds) {
    return false;
  }

  const updatedSavedCampIds = savedCampIds?.filter(
    (savedCampId) => savedCampId !== campgroundId
  );
  localStorage.setItem("saved_camps", JSON.stringify(updatedSavedCampIds));

  return true;
};
