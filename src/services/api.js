/**
 * AXIOS
 * --------------------------------------
 * axios.request(config)
 * axios.get(url[, config])
 * axios.delete(url[, config])
 * axios.head(url[, config])
 * axios.options(url[, config])
 * axios.post(url[, data[, config]])
 * axios.put(url[, data[, config]])
 * axios.patch(url[, data[, config]])
 */

import axios from "axios";

class API {
  constructor(token = null) {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    this.setToken(token);
  }

  /** Sets */

  setToken(token) {
    this.config = {
      headers: {
        Authorization: token,
      },
    };
  }

  /** LOVs */
  async getLovs(class_ = "") {
    if (this.verbosity) {
      console.log("getLovs");
    }

    const response = await this.api.get(
      `/lovs/list/${!!class_ ? `${class_}` : ""}`
    );
    return response.data;
  }

  async createLov(lov) {
    if (this.verbosity) {
      console.log("createLov");
    }

    try {
      const response = await this.api.post(`/lovs/create`, lov, this.config);
      return !!response;
    } catch (error) {
      return false;
    }
  }

  async updateLov(lov) {
    if (this.verbosity) {
      console.log("updateLov");
    }

    try {
      const response = await this.api.put(
        `/lovs/${lov._id}/update`,
        lov,
        this.config
      );
      return !!response;
    } catch (error) {
      return false;
    }
  }

  async deleteLov(_id) {
    if (this.verbosity) {
      console.log("deleteLov");
    }

    try {
      const response = await this.api.delete(
        `/lovs/${_id}/delete`,
        this.config
      );
      return !!response;
    } catch (error) {
      return false;
    }
  }

  /** Session */
  async getSession(login, pass) {
    if (this.verbosity) {
      console.log("getSession");
    }

    try {
      const response = await this.api.get("/sessions", {
        headers: {
          login,
          pass,
        },
      });

      return response.data;
    } catch (error) {
      return null;
    }
  }

  /** User */
  async getUser() {
    if (this.verbosity) {
      console.log("getUser");
    }

    try {
      const response = await this.api.get("/users", this.config);
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async createUser(name, login, pass, email, siape, avatar) {
    if (this.verbosity) {
      console.log("createUser");
    }

    const response = await this.api.post("/users/create", {
      name,
      login,
      pass,
      email,
      siape,
      avatar,
    });

    return response.data;
  }

  async updateUser(user) {
    if (this.verbosity) {
      console.log("updateUser");
    }

    try {
      const response = await this.api.put(`/users/update`, user, this.config);
      return !!response;
    } catch (error) {
      return false;
    }
  }

  /** Profile */
  async getProfile(id) {
    if (this.verbosity) {
      console.log("getProfile");
    }

    try {
      const response = await this.api.get(`/profiles/${id}`, this.config);
      return response.data;
    } catch (error) {
      return null;
    }
  }

  /** Missions */
  async getMission(id) {
    if (this.verbosity) {
      console.log("getMission");
    }

    const response = await this.api.get(`/missions/${id}`);
    return response.data;
  }

  async getMissions() {
    if (this.verbosity) {
      console.log("getMissions");
    }

    const response = await this.api.get("/missions", this.config);
    return response.data;
  }

  async createMission(mission = {}) {
    if (this.verbosity) {
      console.log("createMission");
    }

    const response = await this.api.post(
      "/missions/create",
      mission,
      this.config
    );
    return response.data;
  }

  async updateMission(mission) {
    if (this.verbosity) {
      console.log("updateMission");
    }

    const response = await this.api.put(
      `/missions/${mission._id}/update`,
      mission,
      this.config
    );
    return !!response;
  }

  async deleteMission(id) {
    if (this.verbosity) {
      console.log("deleteMission");
    }

    const response = await this.api.delete(
      `/missions/${id}/delete`,
      this.config
    );
    return !!response;
  }

  /** Questions */
  async getQuestions(missionId, full = false) {
    if (this.verbosity) {
      console.log("getQuestions");
    }

    const response = await this.api.get(
      `/questions/${missionId}${full ? "/full" : ""}`,
      this.config
    );
    return response.data;
  }

  async createQuestion(missionId, question = {}) {
    if (this.verbosity) {
      console.log("createQuestion");
    }

    const response = await this.api.post(
      `/questions/${missionId}/create`,
      question,
      this.config
    );
    return response.data;
  }

  async updateQuestion(question) {
    if (this.verbosity) {
      console.log("updateQuestion");
    }

    const response = await this.api.put(
      `/questions/${question._id}/update`,
      question,
      this.config
    );
    return response.data;
  }

  async deleteQuestion(id) {
    if (this.verbosity) {
      console.log("deleteQuestion");
    }

    const response = await this.api.delete(
      `/questions/${id}/delete`,
      this.config
    );
    return !!response;
  }

  /** Alternatives */
  async getAlternatives(questionId) {
    if (this.verbosity) {
      console.log("getAlternatives");
    }

    const response = await this.api.get(
      `/alternatives/${questionId}`,
      this.config
    );
    return response.data;
  }

  async createAlternative(questionId, alternative = {}) {
    if (this.verbosity) {
      console.log("createAlternative");
    }

    const response = await this.api.post(
      `/alternatives/${questionId}/create`,
      alternative,
      this.config
    );
    return response.data;
  }

  async updateAlternative(questionId, alternative) {
    if (this.verbosity) {
      console.log("updateAlternative");
    }

    const response = await this.api.put(
      `/alternatives/${questionId}/${alternative._id}/update`,
      alternative,
      this.config
    );
    return response.data;
  }

  async deleteAlternative(questionId, alternativeId) {
    if (this.verbosity) {
      console.log("deleteAlternative");
    }

    const response = await this.api.delete(
      `/alternatives/${questionId}/${alternativeId}/delete`,
      this.config
    );
    return !!response;
  }

  /** Quizz */
  async getQuiz(code) {
    if (this.verbosity) {
      console.log("getQuiz");
    }

    try {
      const response = await this.api.get(`/quizz/${code}`, this.config);
      return response.data;
    } catch (error) {
      return false;
    }
  }

  /** Engages */
  async getEngages() {
    if (this.verbosity) {
      console.log("getEngages");
    }

    const response = await this.api.get(`/engages`, this.config);
    return response.data;
  }

  async getEngage(missionId) {
    if (this.verbosity) {
      console.log("getEngage");
    }

    const response = await this.api.get(`/engages/${missionId}`, this.config);
    return response.data;
  }

  async createEngage(missionId) {
    if (this.verbosity) {
      console.log("createEngage");
    }

    const response = await this.api.post(
      `/engages/${missionId}/create`,
      {},
      this.config
    );
    return !!response;
  }

  async updateEngage(missionId) {
    if (this.verbosity) {
      console.log("updateEngage");
    }

    const response = await this.api.put(
      `/engages/${missionId}/update`,
      {},
      this.config
    );
    return response.data;
  }

  /** Answers */
  async createAnswer(missionId, questionId, alternativeId) {
    if (this.verbosity) {
      console.log("createAnswer");
    }

    const response = await this.api.put(
      "/answers/create",
      {
        mission: missionId,
        question: questionId,
        alternative: alternativeId,
      },
      this.config
    );
    return !!response;
  }

  async getAnswers(missionId) {
    if (this.verbosity) {
      console.log("getAnswers");
    }

    const response = await this.api.get(`/answers/${missionId}`, this.config);
    return response.data;
  }

  /** Rankings */
  async getRankings() {
    if (this.verbosity) {
      console.log("getRankings");
    }

    const response = await this.api.get(`/rankings`, this.config);
    return response.data;
  }

  /** Avatars */
  async getAvatar() {
    if (this.verbosity) {
      console.log("getAvatar");
    }

    const response = await this.api.get(`/avatars`, this.config);
    return response.data;
  }

  async createAvatar(avatar) {
    if (this.verbosity) {
      console.log("createAvatar");
    }

    const response = await this.api.post(
      "/avatars/create",
      avatar,
      this.config
    );
    return !!response;
  }

  async updateAvatar(avatar) {
    if (this.verbosity) {
      console.log("updateAvatar");
    }

    const response = await this.api.put("/avatars/update", avatar, this.config);
    return !!response;
  }

  /** Access */
  async getAccesses() {
    if (this.verbosity) {
      console.log("getAccesses");
    }

    const response = await this.api.get("/access", this.config);
    return response.data;
  }

  async updateAccess(access) {
    if (this.verbosity) {
      console.log("updateAccess");
    }

    try {
      const response = await this.api.put(
        `/access/${access._id}/update`,
        access,
        this.config
      );
      return !!response;
    } catch (error) {
      return false;
    }
  }
}

export default new API();
