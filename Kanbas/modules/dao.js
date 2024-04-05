import model from "./model.js";

export const createModule = (module) => {
    delete module._id
    return model.create(module);
}
 
export const findAllModulesForCourse = () => model.find();
export const updateModule = (mid, module) =>  model.updateOne({ _id: mid }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });