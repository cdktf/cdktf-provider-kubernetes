// https://www.terraform.io/docs/providers/kubernetes/r/priority_class.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PriorityClassConfig extends TerraformMetaArguments {
  /** An arbitrary string that usually provides guidelines on when this priority class should be used. */
  readonly description?: string;
  /** Specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority. */
  readonly globalDefault?: boolean;
  /** The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec. */
  readonly value: number;
  /** metadata block */
  readonly metadata: PriorityClassMetadata[];
}
export interface PriorityClassMetadata {
  /** An unstructured key value map stored with the priority class that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the priority class. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the priority class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}

// Resource

export class PriorityClass extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PriorityClassConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_priority_class',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._globalDefault = config.globalDefault;
    this._value = config.value;
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // global_default - computed: false, optional: true, required: false
  private _globalDefault?: boolean;
  public get globalDefault() {
    return this._globalDefault;
  }
  public set globalDefault(value: boolean | undefined) {
    this._globalDefault = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // value - computed: false, optional: false, required: true
  private _value: number;
  public get value() {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: PriorityClassMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: PriorityClassMetadata[]) {
    this._metadata = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      global_default: this._globalDefault,
      value: this._value,
      metadata: this._metadata,
    };
  }
}
