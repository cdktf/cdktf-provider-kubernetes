// https://www.terraform.io/docs/providers/kubernetes/r/role.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RoleConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: RoleMetadata[];
  /** rule block */
  readonly rule: RoleRule[];
}
export interface RoleMetadata {
  /** An unstructured key value map stored with the role that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the role. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the role, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the role must be unique. */
  readonly namespace?: string;
}
export interface RoleRule {
  /** Name of the APIGroup that contains the resources */
  readonly apiGroups: string[];
  /** White list of names that the rule applies to */
  readonly resourceNames?: string[];
  /** List of resources that the rule applies to */
  readonly resources: string[];
  /** List of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule */
  readonly verbs: string[];
}

// Resource

export class Role extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_role',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._rule = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: RoleMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: RoleMetadata[]) {
    this._metadata = value;
  }

  // rule - computed: false, optional: false, required: true
  private _rule: RoleRule[];
  public get rule() {
    return this._rule;
  }
  public set rule(value: RoleRule[]) {
    this._rule = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      rule: this._rule,
    };
  }
}
