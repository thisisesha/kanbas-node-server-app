import model from "./model.js";
export const findModulesByCourse = (courseId) =>
  model.find({ course: courseId });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findById(moduleId);
export const updateModule = (moduleId, module) =>
  model.updateOne({ _id: moduleId }, { $set: module });
export const createModule = (module) => {
  delete module._id;
  return model.create(module);
};