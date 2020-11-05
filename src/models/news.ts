import { FieldType } from "soukai";
import { SolidModel } from "soukai-solid";

export default class News extends SolidModel {
  public static timestamps = ["createdAt"];

  public static rdfContexts = {
    schema: "https://schema.org/",
  };

  public static rdfsClasses = ["schema:Report"];
  public createdAt!: Date;
  public updatedAt!: Date;
  public static fields = {
    name: FieldType.String,
    author: FieldType.String,
    articleBody: FieldType.String,
    category: FieldType.String,
    filename: FieldType.String,
    fileurl: FieldType.String,
  };

  // public actions: WatchAction[] | undefined;
  // public relatedActions: SolidHasManyRelation<
  //   Movie,
  //   WatchAction,
  //   typeof WatchAction
  // >;

  // public actionsRelationship(): Relation {
  //   return this.hasMany(WatchAction, "object");
  // }
}
