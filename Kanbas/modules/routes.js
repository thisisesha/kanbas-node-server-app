import * as dao from "./dao.js";

function ModuleRoutes(app) {

  const findAllModulesForCourse = async (req, res) => {
    const modules = await dao.findAllModulesForCourse();
    res.json(modules);
  }

  const createModule = async (req, res) => {
    const module = await dao.createModule(req.body);
    console.log(module);
    res.json(module);
  }

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  }

  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  }

  app.get("/api/courses/:cid/modules", findAllModulesForCourse);
  app.post("/api/courses/:cid/modules", createModule);
  app.delete("/api/modules/:mid", deleteModule);
  app.put("/api/modules/:mid", updateModule);
}
export default ModuleRoutes;