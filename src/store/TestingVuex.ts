import { Module, Mutation, Action, VuexModule } from "vuex-class-modules";
import store from "./";

@Module({ generateMutationSetters: true })
class TestingVuex extends VuexModule {
  all: string[] = [];

  @Mutation
  decrementTestingVuex() {
    this.all.shift();
  }

  @Action
  async getItMate() {
    this.all = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(["zero", "one", "two", "three"]);
      }, 2000);
    });
  }
}

export const testingVuexModule = new TestingVuex({ store, name: "testing" });
