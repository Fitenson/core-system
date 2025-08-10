import BaseEntity from "@/core/domain/entity/BaseEntity";
import { UserModel } from "../form/userSchema";


export default class User extends BaseEntity<UserModel> implements UserModel {
    public id!: string;
    public name!: string;
    public full_name!: string;
    public email!: string;
    public description!: string;
    public nric!: string;
    public address!: string;
    public created_at!: string;
    public created_by!: string;
    public updated_at!: string;
    public updated_by!: string;


    constructor(data: Partial<User>) {
        super();
        Object.assign(this, data);
    }


    setName(name: string): void
    {
        this.name = name;
    }

    setFullName(full_name: string): void
    {
        this.full_name = full_name;
    }

    setEmail(email: string): void
    {
        this.email = email;
    }

    setDescription(description: string): void
    {
        this.description = description;
    }

    setNric(nric: string): void
    {
        this.nric = nric;
    }

    setAddress(address: string): void
    {
        this.address = address;
    }
}
