// https://www.terraform.io/docs/providers/kubernetes/r/role_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RoleBindingConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: RoleBindingMetadata[];
  /** role_ref block */
  readonly roleRef: RoleBindingRoleRef[];
  /** subject block */
  readonly subject: RoleBindingSubject[];
}
export interface RoleBindingMetadata {
  /** An unstructured key value map stored with the roleBinding that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the roleBinding. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the roleBinding, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the roleBinding must be unique. */
  readonly namespace?: string;
}
export interface RoleBindingRoleRef {
  /** The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`. */
  readonly apiGroup: string;
  /** The kind of resource. */
  readonly kind: string;
  /** The name of the User to bind to. */
  readonly name: string;
}
export interface RoleBindingSubject {
  /** The API group of the subject resource. */
  readonly apiGroup?: string;
  /** The kind of resource. */
  readonly kind: string;
  /** The name of the resource to bind to. */
  readonly name: string;
  /** The Namespace of the subject resource. */
  readonly namespace?: string;
}

// Resource

export class RoleBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RoleBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_role_binding',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._roleRef = config.roleRef;
    this._subject = config.subject;
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
  private _metadata: RoleBindingMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: RoleBindingMetadata[]) {
    this._metadata = value;
  }

  // role_ref - computed: false, optional: false, required: true
  private _roleRef: RoleBindingRoleRef[];
  public get roleRef() {
    return this._roleRef;
  }
  public set roleRef(value: RoleBindingRoleRef[]) {
    this._roleRef = value;
  }

  // subject - computed: false, optional: false, required: true
  private _subject: RoleBindingSubject[];
  public get subject() {
    return this._subject;
  }
  public set subject(value: RoleBindingSubject[]) {
    this._subject = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      role_ref: this._roleRef,
      subject: this._subject,
    };
  }
}
