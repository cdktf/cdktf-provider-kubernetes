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
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: RoleBindingMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: RoleBindingMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // role_ref - computed: false, optional: false, required: true
  private _roleRef: RoleBindingRoleRef[];
  public get roleRef() {
    return this.interpolationForAttribute('role_ref') as any;
  }
  public set roleRef(value: RoleBindingRoleRef[]) {
    this._roleRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRefInput() {
    return this._roleRef
  }

  // subject - computed: false, optional: false, required: true
  private _subject: RoleBindingSubject[];
  public get subject() {
    return this.interpolationForAttribute('subject') as any;
  }
  public set subject(value: RoleBindingSubject[]) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      role_ref: this._roleRef,
      subject: this._subject,
    };
  }
}
