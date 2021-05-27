// https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterRoleBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html#metadata ClusterRoleBinding#metadata}
  */
  readonly metadata: ClusterRoleBindingMetadata[];
  /**
  * role_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html#role_ref ClusterRoleBinding#role_ref}
  */
  readonly roleRef: ClusterRoleBindingRoleRef[];
  /**
  * subject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html#subject ClusterRoleBinding#subject}
  */
  readonly subject: ClusterRoleBindingSubject[];
}
export interface ClusterRoleBindingMetadata {
  /**
  * An unstructured key value map stored with the clusterRoleBinding that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html#annotations ClusterRoleBinding#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRoleBinding. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html#labels ClusterRoleBinding#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the clusterRoleBinding, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html#name ClusterRoleBinding#name}
  */
  readonly name?: string;
}

function clusterRoleBindingMetadataToTerraform(struct?: ClusterRoleBindingMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ClusterRoleBindingRoleRef {
  /**
  * The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html#api_group ClusterRoleBinding#api_group}
  */
  readonly apiGroup: string;
  /**
  * The kind of resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html#kind ClusterRoleBinding#kind}
  */
  readonly kind: string;
  /**
  * The name of the User to bind to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html#name ClusterRoleBinding#name}
  */
  readonly name: string;
}

function clusterRoleBindingRoleRefToTerraform(struct?: ClusterRoleBindingRoleRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ClusterRoleBindingSubject {
  /**
  * The API group of the subject resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html#api_group ClusterRoleBinding#api_group}
  */
  readonly apiGroup?: string;
  /**
  * The kind of resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html#kind ClusterRoleBinding#kind}
  */
  readonly kind: string;
  /**
  * The name of the resource to bind to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html#name ClusterRoleBinding#name}
  */
  readonly name: string;
  /**
  * The Namespace of the subject resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html#namespace ClusterRoleBinding#namespace}
  */
  readonly namespace?: string;
}

function clusterRoleBindingSubjectToTerraform(struct?: ClusterRoleBindingSubject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html kubernetes_cluster_role_binding}
*/
export class ClusterRoleBinding extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding.html kubernetes_cluster_role_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterRoleBindingConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: ClusterRoleBindingMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: ClusterRoleBindingMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // role_ref - computed: false, optional: false, required: true
  private _roleRef: ClusterRoleBindingRoleRef[];
  public get roleRef() {
    return this.interpolationForAttribute('role_ref') as any;
  }
  public set roleRef(value: ClusterRoleBindingRoleRef[]) {
    this._roleRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRefInput() {
    return this._roleRef
  }

  // subject - computed: false, optional: false, required: true
  private _subject: ClusterRoleBindingSubject[];
  public get subject() {
    return this.interpolationForAttribute('subject') as any;
  }
  public set subject(value: ClusterRoleBindingSubject[]) {
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
      metadata: cdktf.listMapper(clusterRoleBindingMetadataToTerraform)(this._metadata),
      role_ref: cdktf.listMapper(clusterRoleBindingRoleRefToTerraform)(this._roleRef),
      subject: cdktf.listMapper(clusterRoleBindingSubjectToTerraform)(this._subject),
    };
  }
}
