// https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ClusterRoleBindingConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: ClusterRoleBindingMetadata[];
  /** role_ref block */
  readonly roleRef: ClusterRoleBindingRoleRef[];
  /** subject block */
  readonly subject: ClusterRoleBindingSubject[];
}
export interface ClusterRoleBindingMetadata {
  /** An unstructured key value map stored with the clusterRoleBinding that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRoleBinding. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the clusterRoleBinding, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface ClusterRoleBindingRoleRef {
  /** The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`. */
  readonly apiGroup: string;
  /** The kind of resource. */
  readonly kind: string;
  /** The name of the User to bind to. */
  readonly name: string;
}
export interface ClusterRoleBindingSubject {
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

export class ClusterRoleBinding extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ClusterRoleBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_cluster_role_binding',
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
  private _metadata: ClusterRoleBindingMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: ClusterRoleBindingMetadata[]) {
    this._metadata = value;
  }

  // role_ref - computed: false, optional: false, required: true
  private _roleRef: ClusterRoleBindingRoleRef[];
  public get roleRef() {
    return this._roleRef;
  }
  public set roleRef(value: ClusterRoleBindingRoleRef[]) {
    this._roleRef = value;
  }

  // subject - computed: false, optional: false, required: true
  private _subject: ClusterRoleBindingSubject[];
  public get subject() {
    return this._subject;
  }
  public set subject(value: ClusterRoleBindingSubject[]) {
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
