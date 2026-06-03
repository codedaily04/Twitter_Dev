class CrudRepository{
    constructor(model){
        this.model=model;
    }
    async create(data){
        try {
            const result=await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo{create)");
            throw error;  
        }
    }
    async destroy(id){
        try {
            const result=await this.model.findByIdAndDelete(id);
        } catch (error) {
            console.log("Something went wrong in Crud Repo{destroy)");
            throw error;  
        }
    }

    async getall(){
        try {
            const result=await this.model.find({});
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo{getall)");
            throw error;  
        }
    }

    async get(id){
        try {
            const result=await this.model.findById(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo{get)");
            throw error;  
        }
    }

    async update(id,data){
        try {
            const result=await this.model.findByIdAndUpdate(id,data,{new:true});
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo{update)");
            throw error;  
        }
    }

}
export default CrudRepository;