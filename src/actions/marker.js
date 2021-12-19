export const SET_ENABLED = "SET_ENABLED";
export const SET_STATS = "SET_STATS";

export const setEnabled = (data) => ({
  type: SET_ENABLED,
  data,
});

export const setStats = (data) => ({
  type: SET_STATS,
  data,
});
