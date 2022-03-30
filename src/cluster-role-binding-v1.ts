// https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterRoleBindingV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1#metadata ClusterRoleBindingV1#metadata}
  */
  readonly metadata: ClusterRoleBindingV1Metadata;
  /**
  * role_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1#role_ref ClusterRoleBindingV1#role_ref}
  */
  readonly roleRef: ClusterRoleBindingV1RoleRef;
  /**
  * subject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1#subject ClusterRoleBindingV1#subject}
  */
  readonly subject: ClusterRoleBindingV1Subject[] | cdktf.IResolvable;
}
export interface ClusterRoleBindingV1Metadata {
  /**
  * An unstructured key value map stored with the clusterRoleBinding that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1#annotations ClusterRoleBindingV1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRoleBinding. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1#labels ClusterRoleBindingV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the clusterRoleBinding, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1#name ClusterRoleBindingV1#name}
  */
  readonly name?: string;
}

export function clusterRoleBindingV1MetadataToTerraform(struct?: ClusterRoleBindingV1MetadataOutputReference | ClusterRoleBindingV1Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class ClusterRoleBindingV1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterRoleBindingV1Metadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRoleBindingV1Metadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface ClusterRoleBindingV1RoleRef {
  /**
  * The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1#api_group ClusterRoleBindingV1#api_group}
  */
  readonly apiGroup: string;
  /**
  * The kind of resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1#kind ClusterRoleBindingV1#kind}
  */
  readonly kind: string;
  /**
  * The name of the User to bind to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1#name ClusterRoleBindingV1#name}
  */
  readonly name: string;
}

export function clusterRoleBindingV1RoleRefToTerraform(struct?: ClusterRoleBindingV1RoleRefOutputReference | ClusterRoleBindingV1RoleRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class ClusterRoleBindingV1RoleRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterRoleBindingV1RoleRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRoleBindingV1RoleRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: false, required: true
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface ClusterRoleBindingV1Subject {
  /**
  * The API group of the subject resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1#api_group ClusterRoleBindingV1#api_group}
  */
  readonly apiGroup?: string;
  /**
  * The kind of resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1#kind ClusterRoleBindingV1#kind}
  */
  readonly kind: string;
  /**
  * The name of the resource to bind to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1#name ClusterRoleBindingV1#name}
  */
  readonly name: string;
  /**
  * The Namespace of the subject resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1#namespace ClusterRoleBindingV1#namespace}
  */
  readonly namespace?: string;
}

export function clusterRoleBindingV1SubjectToTerraform(struct?: ClusterRoleBindingV1Subject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1 kubernetes_cluster_role_binding_v1}
*/
export class ClusterRoleBindingV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_cluster_role_binding_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role_binding_v1 kubernetes_cluster_role_binding_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterRoleBindingV1Config
  */
  public constructor(scope: Construct, id: string, config: ClusterRoleBindingV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_cluster_role_binding_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.9.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata.internalValue = config.metadata;
    this._roleRef.internalValue = config.roleRef;
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
  private _metadata = new ClusterRoleBindingV1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ClusterRoleBindingV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // role_ref - computed: false, optional: false, required: true
  private _roleRef = new ClusterRoleBindingV1RoleRefOutputReference(this, "role_ref");
  public get roleRef() {
    return this._roleRef;
  }
  public putRoleRef(value: ClusterRoleBindingV1RoleRef) {
    this._roleRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRefInput() {
    return this._roleRef.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: ClusterRoleBindingV1Subject[] | cdktf.IResolvable; 
  public get subject() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subject');
  }
  public set subject(value: ClusterRoleBindingV1Subject[] | cdktf.IResolvable) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: clusterRoleBindingV1MetadataToTerraform(this._metadata.internalValue),
      role_ref: clusterRoleBindingV1RoleRefToTerraform(this._roleRef.internalValue),
      subject: cdktf.listMapper(clusterRoleBindingV1SubjectToTerraform)(this._subject),
    };
  }
}
