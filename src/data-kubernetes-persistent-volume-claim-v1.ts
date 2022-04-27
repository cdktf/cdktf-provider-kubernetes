// https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesPersistentVolumeClaimV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#metadata DataKubernetesPersistentVolumeClaimV1#metadata}
  */
  readonly metadata: DataKubernetesPersistentVolumeClaimV1Metadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#spec DataKubernetesPersistentVolumeClaimV1#spec}
  */
  readonly spec?: DataKubernetesPersistentVolumeClaimV1Spec[] | cdktf.IResolvable;
}
export interface DataKubernetesPersistentVolumeClaimV1Metadata {
  /**
  * An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#annotations DataKubernetesPersistentVolumeClaimV1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#generate_name DataKubernetesPersistentVolumeClaimV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#labels DataKubernetesPersistentVolumeClaimV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the persistent volume claim, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#name DataKubernetesPersistentVolumeClaimV1#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the persistent volume claim must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#namespace DataKubernetesPersistentVolumeClaimV1#namespace}
  */
  readonly namespace?: string;
}

export function dataKubernetesPersistentVolumeClaimV1MetadataToTerraform(struct?: DataKubernetesPersistentVolumeClaimV1MetadataOutputReference | DataKubernetesPersistentVolumeClaimV1Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DataKubernetesPersistentVolumeClaimV1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataKubernetesPersistentVolumeClaimV1Metadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPersistentVolumeClaimV1Metadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface DataKubernetesPersistentVolumeClaimV1SpecResources {
}

export function dataKubernetesPersistentVolumeClaimV1SpecResourcesToTerraform(struct?: DataKubernetesPersistentVolumeClaimV1SpecResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKubernetesPersistentVolumeClaimV1SpecResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesPersistentVolumeClaimV1SpecResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  public limits(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'limits').lookup(key);
  }

  // requests - computed: true, optional: false, required: false
  public requests(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'requests').lookup(key);
  }
}

export class DataKubernetesPersistentVolumeClaimV1SpecResourcesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference {
    return new DataKubernetesPersistentVolumeClaimV1SpecResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#key DataKubernetesPersistentVolumeClaimV1#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#operator DataKubernetesPersistentVolumeClaimV1#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#values DataKubernetesPersistentVolumeClaimV1#values}
  */
  readonly values?: string[];
}

export function dataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsToTerraform(struct?: DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataKubernetesPersistentVolumeClaimV1SpecSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#match_labels DataKubernetesPersistentVolumeClaimV1#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#match_expressions DataKubernetesPersistentVolumeClaimV1#match_expressions}
  */
  readonly matchExpressions?: DataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function dataKubernetesPersistentVolumeClaimV1SpecSelectorToTerraform(struct?: DataKubernetesPersistentVolumeClaimV1SpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(dataKubernetesPersistentVolumeClaimV1SpecSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface DataKubernetesPersistentVolumeClaimV1Spec {
  /**
  * Name of the storage class requested by the claim
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#storage_class_name DataKubernetesPersistentVolumeClaimV1#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * The binding reference to the PersistentVolume backing this claim.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#volume_name DataKubernetesPersistentVolumeClaimV1#volume_name}
  */
  readonly volumeName?: string;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1#selector DataKubernetesPersistentVolumeClaimV1#selector}
  */
  readonly selector?: DataKubernetesPersistentVolumeClaimV1SpecSelector[] | cdktf.IResolvable;
}

export function dataKubernetesPersistentVolumeClaimV1SpecToTerraform(struct?: DataKubernetesPersistentVolumeClaimV1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    selector: cdktf.listMapper(dataKubernetesPersistentVolumeClaimV1SpecSelectorToTerraform)(struct!.selector),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1 kubernetes_persistent_volume_claim_v1}
*/
export class DataKubernetesPersistentVolumeClaimV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_persistent_volume_claim_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim_v1 kubernetes_persistent_volume_claim_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubernetesPersistentVolumeClaimV1Config
  */
  public constructor(scope: Construct, id: string, config: DataKubernetesPersistentVolumeClaimV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_persistent_volume_claim_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.11.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata.internalValue = config.metadata;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataKubernetesPersistentVolumeClaimV1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataKubernetesPersistentVolumeClaimV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: DataKubernetesPersistentVolumeClaimV1Spec[] | cdktf.IResolvable; 
  public get spec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('spec');
  }
  public set spec(value: DataKubernetesPersistentVolumeClaimV1Spec[] | cdktf.IResolvable) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataKubernetesPersistentVolumeClaimV1MetadataToTerraform(this._metadata.internalValue),
      spec: cdktf.listMapper(dataKubernetesPersistentVolumeClaimV1SpecToTerraform)(this._spec),
    };
  }
}
