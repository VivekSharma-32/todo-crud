import Joi from "joi";
import _ from "lodash";

export class BaseInputModel {
  constructor() {}

  schema: Joi.ObjectSchema<any>;

  validate(): any {
    const { error } = this.schema.validate(_.omit(this, "schema"), {
      abortEarly: false,
    });
    if (error) {
      const errorDetail = error.details.map((detail) => ({
        reason: detail.message,
        path: detail.path.join("."),
      }));
      return errorDetail;
    }
  }
}
