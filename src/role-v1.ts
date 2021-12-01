// https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html#metadata RoleV1#metadata}
  */
  readonly metadata: RoleV1Metadata;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html#rule RoleV1#rule}
  */
  readonly rule: RoleV1Rule[];
}
export interface RoleV1Metadata {
  /**
  * An unstructured key value map stored with the role that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html#annotations RoleV1#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html#generate_name RoleV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the role. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html#labels RoleV1#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the role, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html#name RoleV1#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the role must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html#namespace RoleV1#namespace}
  */
  readonly namespace?: string;
}

export function roleV1MetadataToTerraform(struct?: RoleV1MetadataOutputReference | RoleV1Metadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class RoleV1MetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): RoleV1Metadata | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._annotations) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleV1Metadata | undefined) {
    if (value === undefined) {
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface RoleV1Rule {
  /**
  * Name of the APIGroup that contains the resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html#api_groups RoleV1#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * White list of names that the rule applies to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html#resource_names RoleV1#resource_names}
  */
  readonly resourceNames?: string[];
  /**
  * List of resources that the rule applies to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html#resources RoleV1#resources}
  */
  readonly resources: string[];
  /**
  * List of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html#verbs RoleV1#verbs}
  */
  readonly verbs: string[];
}

export function roleV1RuleToTerraform(struct?: RoleV1Rule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.apiGroups),
    resource_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceNames),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    verbs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.verbs),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html kubernetes_role_v1}
*/
export class RoleV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_role_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/role_v1.html kubernetes_role_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleV1Config
  */
  public constructor(scope: Construct, id: string, config: RoleV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_role_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata.internalValue = config.metadata;
    this._rule = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new RoleV1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: RoleV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: RoleV1Rule[]; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: RoleV1Rule[]) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: roleV1MetadataToTerraform(this._metadata.internalValue),
      rule: cdktf.listMapper(roleV1RuleToTerraform)(this._rule),
    };
  }
}
