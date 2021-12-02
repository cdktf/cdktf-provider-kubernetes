// https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PersistentVolumeV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#metadata PersistentVolumeV1#metadata}
  */
  readonly metadata: PersistentVolumeV1Metadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#spec PersistentVolumeV1#spec}
  */
  readonly spec: PersistentVolumeV1Spec[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#timeouts PersistentVolumeV1#timeouts}
  */
  readonly timeouts?: PersistentVolumeV1Timeouts;
}
export interface PersistentVolumeV1Metadata {
  /**
  * An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#annotations PersistentVolumeV1#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#labels PersistentVolumeV1#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the persistent volume, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#name PersistentVolumeV1#name}
  */
  readonly name?: string;
}

export function persistentVolumeV1MetadataToTerraform(struct?: PersistentVolumeV1MetadataOutputReference | PersistentVolumeV1Metadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class PersistentVolumeV1MetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1Metadata | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._annotations) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1Metadata | undefined) {
    if (value === undefined) {
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else {
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
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
}
export interface PersistentVolumeV1SpecClaimRef {
  /**
  * The name of the PersistentVolumeClaim
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#name PersistentVolumeV1#name}
  */
  readonly name: string;
  /**
  * The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#namespace PersistentVolumeV1#namespace}
  */
  readonly namespace?: string;
}

export function persistentVolumeV1SpecClaimRefToTerraform(struct?: PersistentVolumeV1SpecClaimRefOutputReference | PersistentVolumeV1SpecClaimRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PersistentVolumeV1SpecClaimRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecClaimRef | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
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

  public set internalValue(value: PersistentVolumeV1SpecClaimRef | undefined) {
    if (value === undefined) {
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this._name = value.name;
      this._namespace = value.namespace;
    }
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
export interface PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#key PersistentVolumeV1#key}
  */
  readonly key: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#operator PersistentVolumeV1#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#values PersistentVolumeV1#values}
  */
  readonly values?: string[];
}

export function persistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsToTerraform(struct?: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#key PersistentVolumeV1#key}
  */
  readonly key: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#operator PersistentVolumeV1#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#values PersistentVolumeV1#values}
  */
  readonly values?: string[];
}

export function persistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsToTerraform(struct?: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm {
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#match_expressions PersistentVolumeV1#match_expressions}
  */
  readonly matchExpressions?: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions[];
  /**
  * match_fields block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#match_fields PersistentVolumeV1#match_fields}
  */
  readonly matchFields?: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields[];
}

export function persistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermToTerraform(struct?: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(persistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsToTerraform)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(persistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsToTerraform)(struct!.matchFields),
  }
}

export interface PersistentVolumeV1SpecNodeAffinityRequired {
  /**
  * node_selector_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#node_selector_term PersistentVolumeV1#node_selector_term}
  */
  readonly nodeSelectorTerm: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm[];
}

export function persistentVolumeV1SpecNodeAffinityRequiredToTerraform(struct?: PersistentVolumeV1SpecNodeAffinityRequiredOutputReference | PersistentVolumeV1SpecNodeAffinityRequired): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_term: cdktf.listMapper(persistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermToTerraform)(struct!.nodeSelectorTerm),
  }
}

export class PersistentVolumeV1SpecNodeAffinityRequiredOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecNodeAffinityRequired | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerm) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerm = this._nodeSelectorTerm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecNodeAffinityRequired | undefined) {
    if (value === undefined) {
      this._nodeSelectorTerm = undefined;
    }
    else {
      this._nodeSelectorTerm = value.nodeSelectorTerm;
    }
  }

  // node_selector_term - computed: false, optional: false, required: true
  private _nodeSelectorTerm?: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm[]; 
  public get nodeSelectorTerm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_selector_term') as any;
  }
  public set nodeSelectorTerm(value: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm[]) {
    this._nodeSelectorTerm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermInput() {
    return this._nodeSelectorTerm;
  }
}
export interface PersistentVolumeV1SpecNodeAffinity {
  /**
  * required block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#required PersistentVolumeV1#required}
  */
  readonly required?: PersistentVolumeV1SpecNodeAffinityRequired;
}

export function persistentVolumeV1SpecNodeAffinityToTerraform(struct?: PersistentVolumeV1SpecNodeAffinityOutputReference | PersistentVolumeV1SpecNodeAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required: persistentVolumeV1SpecNodeAffinityRequiredToTerraform(struct!.required),
  }
}

export class PersistentVolumeV1SpecNodeAffinityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecNodeAffinity | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._required) {
      hasAnyValues = true;
      internalValueResult.required = this._required?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecNodeAffinity | undefined) {
    if (value === undefined) {
      this._required.internalValue = undefined;
    }
    else {
      this._required.internalValue = value.required;
    }
  }

  // required - computed: false, optional: true, required: false
  private _required = new PersistentVolumeV1SpecNodeAffinityRequiredOutputReference(this as any, "required", true);
  public get required() {
    return this._required;
  }
  public putRequired(value: PersistentVolumeV1SpecNodeAffinityRequired) {
    this._required.internalValue = value;
  }
  public resetRequired() {
    this._required.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required.internalValue;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#fs_type PersistentVolumeV1#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#partition PersistentVolumeV1#partition}
  */
  readonly partition?: number;
  /**
  * Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#volume_id PersistentVolumeV1#volume_id}
  */
  readonly volumeId: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._fsType) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore | undefined) {
    if (value === undefined) {
      this._fsType = undefined;
      this._partition = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else {
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk {
  /**
  * Host Caching mode: None, Read Only, Read Write.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#caching_mode PersistentVolumeV1#caching_mode}
  */
  readonly cachingMode: string;
  /**
  * The URI the data disk in the blob storage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#data_disk_uri PersistentVolumeV1#data_disk_uri}
  */
  readonly dataDiskUri: string;
  /**
  * The Name of the data disk in the blob storage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#disk_name PersistentVolumeV1#disk_name}
  */
  readonly diskName: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#fs_type PersistentVolumeV1#fs_type}
  */
  readonly fsType?: string;
  /**
  * The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#kind PersistentVolumeV1#kind}
  */
  readonly kind?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function persistentVolumeV1SpecPersistentVolumeSourceAzureDiskToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching_mode: cdktf.stringToTerraform(struct!.cachingMode),
    data_disk_uri: cdktf.stringToTerraform(struct!.dataDiskUri),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    kind: cdktf.stringToTerraform(struct!.kind),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._cachingMode) {
      hasAnyValues = true;
      internalValueResult.cachingMode = this._cachingMode;
    }
    if (this._dataDiskUri) {
      hasAnyValues = true;
      internalValueResult.dataDiskUri = this._dataDiskUri;
    }
    if (this._diskName) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._fsType) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._kind) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk | undefined) {
    if (value === undefined) {
      this._cachingMode = undefined;
      this._dataDiskUri = undefined;
      this._diskName = undefined;
      this._fsType = undefined;
      this._kind = undefined;
      this._readOnly = undefined;
    }
    else {
      this._cachingMode = value.cachingMode;
      this._dataDiskUri = value.dataDiskUri;
      this._diskName = value.diskName;
      this._fsType = value.fsType;
      this._kind = value.kind;
      this._readOnly = value.readOnly;
    }
  }

  // caching_mode - computed: false, optional: false, required: true
  private _cachingMode?: string; 
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }
  public set cachingMode(value: string) {
    this._cachingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingModeInput() {
    return this._cachingMode;
  }

  // data_disk_uri - computed: false, optional: false, required: true
  private _dataDiskUri?: string; 
  public get dataDiskUri() {
    return this.getStringAttribute('data_disk_uri');
  }
  public set dataDiskUri(value: string) {
    this._dataDiskUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskUriInput() {
    return this._dataDiskUri;
  }

  // disk_name - computed: false, optional: false, required: true
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceAzureFile {
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of secret that contains Azure Storage Account Name and Key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#secret_name PersistentVolumeV1#secret_name}
  */
  readonly secretName: string;
  /**
  * The namespace of the secret that contains Azure Storage Account Name and Key. For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#secret_namespace PersistentVolumeV1#secret_namespace}
  */
  readonly secretNamespace?: string;
  /**
  * Share Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#share_name PersistentVolumeV1#share_name}
  */
  readonly shareName: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceAzureFileToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceAzureFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_namespace: cdktf.stringToTerraform(struct!.secretNamespace),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceAzureFile | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretName) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretNamespace) {
      hasAnyValues = true;
      internalValueResult.secretNamespace = this._secretNamespace;
    }
    if (this._shareName) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceAzureFile | undefined) {
    if (value === undefined) {
      this._readOnly = undefined;
      this._secretName = undefined;
      this._secretNamespace = undefined;
      this._shareName = undefined;
    }
    else {
      this._readOnly = value.readOnly;
      this._secretName = value.secretName;
      this._secretNamespace = value.secretNamespace;
      this._shareName = value.shareName;
    }
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_namespace - computed: false, optional: true, required: false
  private _secretNamespace?: string; 
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }
  public set secretNamespace(value: string) {
    this._secretNamespace = value;
  }
  public resetSecretNamespace() {
    this._secretNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamespaceInput() {
    return this._secretNamespace;
  }

  // share_name - computed: false, optional: false, required: true
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#name PersistentVolumeV1#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#namespace PersistentVolumeV1#namespace}
  */
  readonly namespace?: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
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

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef | undefined) {
    if (value === undefined) {
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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
export interface PersistentVolumeV1SpecPersistentVolumeSourceCephFs {
  /**
  * Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#monitors PersistentVolumeV1#monitors}
  */
  readonly monitors: string[];
  /**
  * Used as the mounted root, rather than the full Ceph tree, default is /
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#path PersistentVolumeV1#path}
  */
  readonly path?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#secret_file PersistentVolumeV1#secret_file}
  */
  readonly secretFile?: string;
  /**
  * User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#user PersistentVolumeV1#user}
  */
  readonly user?: string;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#secret_ref PersistentVolumeV1#secret_ref}
  */
  readonly secretRef?: PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef;
}

export function persistentVolumeV1SpecPersistentVolumeSourceCephFsToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCephFs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    user: cdktf.stringToTerraform(struct!.user),
    secret_ref: persistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefToTerraform(struct!.secretRef),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceCephFs | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._monitors) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._path) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretFile) {
      hasAnyValues = true;
      internalValueResult.secretFile = this._secretFile;
    }
    if (this._user) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._secretRef) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceCephFs | undefined) {
    if (value === undefined) {
      this._monitors = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._secretFile = undefined;
      this._user = undefined;
      this._secretRef.internalValue = undefined;
    }
    else {
      this._monitors = value.monitors;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._secretFile = value.secretFile;
      this._user = value.user;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_file - computed: false, optional: true, required: false
  private _secretFile?: string; 
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }
  public set secretFile(value: string) {
    this._secretFile = value;
  }
  public resetSecretFile() {
    this._secretFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFileInput() {
    return this._secretFile;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference(this as any, "secret_ref", true);
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceCinder {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#fs_type PersistentVolumeV1#fs_type}
  */
  readonly fsType?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#volume_id PersistentVolumeV1#volume_id}
  */
  readonly volumeId: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceCinderToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCinder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceCinder | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._fsType) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceCinder | undefined) {
    if (value === undefined) {
      this._fsType = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else {
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#name PersistentVolumeV1#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#namespace PersistentVolumeV1#namespace}
  */
  readonly namespace?: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
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

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef | undefined) {
    if (value === undefined) {
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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
export interface PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#name PersistentVolumeV1#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#namespace PersistentVolumeV1#namespace}
  */
  readonly namespace?: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
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

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef | undefined) {
    if (value === undefined) {
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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
export interface PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#name PersistentVolumeV1#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#namespace PersistentVolumeV1#namespace}
  */
  readonly namespace?: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
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

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef | undefined) {
    if (value === undefined) {
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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
export interface PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#name PersistentVolumeV1#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#namespace PersistentVolumeV1#namespace}
  */
  readonly namespace?: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
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

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef | undefined) {
    if (value === undefined) {
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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
export interface PersistentVolumeV1SpecPersistentVolumeSourceCsi {
  /**
  * the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#driver PersistentVolumeV1#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#fs_type PersistentVolumeV1#fs_type}
  */
  readonly fsType?: string;
  /**
  * Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Attributes of the volume to publish.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#volume_attributes PersistentVolumeV1#volume_attributes}
  */
  readonly volumeAttributes?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#volume_handle PersistentVolumeV1#volume_handle}
  */
  readonly volumeHandle: string;
  /**
  * controller_expand_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#controller_expand_secret_ref PersistentVolumeV1#controller_expand_secret_ref}
  */
  readonly controllerExpandSecretRef?: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef;
  /**
  * controller_publish_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#controller_publish_secret_ref PersistentVolumeV1#controller_publish_secret_ref}
  */
  readonly controllerPublishSecretRef?: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef;
  /**
  * node_publish_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#node_publish_secret_ref PersistentVolumeV1#node_publish_secret_ref}
  */
  readonly nodePublishSecretRef?: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef;
  /**
  * node_stage_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#node_stage_secret_ref PersistentVolumeV1#node_stage_secret_ref}
  */
  readonly nodeStageSecretRef?: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef;
}

export function persistentVolumeV1SpecPersistentVolumeSourceCsiToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.volumeAttributes),
    volume_handle: cdktf.stringToTerraform(struct!.volumeHandle),
    controller_expand_secret_ref: persistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefToTerraform(struct!.controllerExpandSecretRef),
    controller_publish_secret_ref: persistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefToTerraform(struct!.controllerPublishSecretRef),
    node_publish_secret_ref: persistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefToTerraform(struct!.nodePublishSecretRef),
    node_stage_secret_ref: persistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefToTerraform(struct!.nodeStageSecretRef),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceCsi | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._driver) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeAttributes) {
      hasAnyValues = true;
      internalValueResult.volumeAttributes = this._volumeAttributes;
    }
    if (this._volumeHandle) {
      hasAnyValues = true;
      internalValueResult.volumeHandle = this._volumeHandle;
    }
    if (this._controllerExpandSecretRef) {
      hasAnyValues = true;
      internalValueResult.controllerExpandSecretRef = this._controllerExpandSecretRef?.internalValue;
    }
    if (this._controllerPublishSecretRef) {
      hasAnyValues = true;
      internalValueResult.controllerPublishSecretRef = this._controllerPublishSecretRef?.internalValue;
    }
    if (this._nodePublishSecretRef) {
      hasAnyValues = true;
      internalValueResult.nodePublishSecretRef = this._nodePublishSecretRef?.internalValue;
    }
    if (this._nodeStageSecretRef) {
      hasAnyValues = true;
      internalValueResult.nodeStageSecretRef = this._nodeStageSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceCsi | undefined) {
    if (value === undefined) {
      this._driver = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._volumeAttributes = undefined;
      this._volumeHandle = undefined;
      this._controllerExpandSecretRef.internalValue = undefined;
      this._controllerPublishSecretRef.internalValue = undefined;
      this._nodePublishSecretRef.internalValue = undefined;
      this._nodeStageSecretRef.internalValue = undefined;
    }
    else {
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._volumeAttributes = value.volumeAttributes;
      this._volumeHandle = value.volumeHandle;
      this._controllerExpandSecretRef.internalValue = value.controllerExpandSecretRef;
      this._controllerPublishSecretRef.internalValue = value.controllerPublishSecretRef;
      this._nodePublishSecretRef.internalValue = value.nodePublishSecretRef;
      this._nodeStageSecretRef.internalValue = value.nodeStageSecretRef;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_attributes - computed: false, optional: true, required: false
  private _volumeAttributes?: { [key: string]: string } | cdktf.IResolvable; 
  public get volumeAttributes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('volume_attributes') as any;
  }
  public set volumeAttributes(value: { [key: string]: string } | cdktf.IResolvable) {
    this._volumeAttributes = value;
  }
  public resetVolumeAttributes() {
    this._volumeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesInput() {
    return this._volumeAttributes;
  }

  // volume_handle - computed: false, optional: false, required: true
  private _volumeHandle?: string; 
  public get volumeHandle() {
    return this.getStringAttribute('volume_handle');
  }
  public set volumeHandle(value: string) {
    this._volumeHandle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeHandleInput() {
    return this._volumeHandle;
  }

  // controller_expand_secret_ref - computed: false, optional: true, required: false
  private _controllerExpandSecretRef = new PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference(this as any, "controller_expand_secret_ref", true);
  public get controllerExpandSecretRef() {
    return this._controllerExpandSecretRef;
  }
  public putControllerExpandSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef) {
    this._controllerExpandSecretRef.internalValue = value;
  }
  public resetControllerExpandSecretRef() {
    this._controllerExpandSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerExpandSecretRefInput() {
    return this._controllerExpandSecretRef.internalValue;
  }

  // controller_publish_secret_ref - computed: false, optional: true, required: false
  private _controllerPublishSecretRef = new PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference(this as any, "controller_publish_secret_ref", true);
  public get controllerPublishSecretRef() {
    return this._controllerPublishSecretRef;
  }
  public putControllerPublishSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef) {
    this._controllerPublishSecretRef.internalValue = value;
  }
  public resetControllerPublishSecretRef() {
    this._controllerPublishSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerPublishSecretRefInput() {
    return this._controllerPublishSecretRef.internalValue;
  }

  // node_publish_secret_ref - computed: false, optional: true, required: false
  private _nodePublishSecretRef = new PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference(this as any, "node_publish_secret_ref", true);
  public get nodePublishSecretRef() {
    return this._nodePublishSecretRef;
  }
  public putNodePublishSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef) {
    this._nodePublishSecretRef.internalValue = value;
  }
  public resetNodePublishSecretRef() {
    this._nodePublishSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublishSecretRefInput() {
    return this._nodePublishSecretRef.internalValue;
  }

  // node_stage_secret_ref - computed: false, optional: true, required: false
  private _nodeStageSecretRef = new PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference(this as any, "node_stage_secret_ref", true);
  public get nodeStageSecretRef() {
    return this._nodeStageSecretRef;
  }
  public putNodeStageSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef) {
    this._nodeStageSecretRef.internalValue = value;
  }
  public resetNodeStageSecretRef() {
    this._nodeStageSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStageSecretRefInput() {
    return this._nodeStageSecretRef.internalValue;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceFc {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#fs_type PersistentVolumeV1#fs_type}
  */
  readonly fsType?: string;
  /**
  * FC target lun number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#lun PersistentVolumeV1#lun}
  */
  readonly lun: number;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * FC target worldwide names (WWNs)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#target_ww_ns PersistentVolumeV1#target_ww_ns}
  */
  readonly targetWwNs: string[];
}

export function persistentVolumeV1SpecPersistentVolumeSourceFcToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceFc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetWwNs),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceFc | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._fsType) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._lun) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._targetWwNs) {
      hasAnyValues = true;
      internalValueResult.targetWwNs = this._targetWwNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceFc | undefined) {
    if (value === undefined) {
      this._fsType = undefined;
      this._lun = undefined;
      this._readOnly = undefined;
      this._targetWwNs = undefined;
    }
    else {
      this._fsType = value.fsType;
      this._lun = value.lun;
      this._readOnly = value.readOnly;
      this._targetWwNs = value.targetWwNs;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // target_ww_ns - computed: false, optional: false, required: true
  private _targetWwNs?: string[]; 
  public get targetWwNs() {
    return this.getListAttribute('target_ww_ns');
  }
  public set targetWwNs(value: string[]) {
    this._targetWwNs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWwNsInput() {
    return this._targetWwNs;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#name PersistentVolumeV1#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#namespace PersistentVolumeV1#namespace}
  */
  readonly namespace?: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
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

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef | undefined) {
    if (value === undefined) {
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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
export interface PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume {
  /**
  * Driver is the name of the driver to use for this volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#driver PersistentVolumeV1#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#fs_type PersistentVolumeV1#fs_type}
  */
  readonly fsType?: string;
  /**
  * Extra command options if any.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#options PersistentVolumeV1#options}
  */
  readonly options?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#secret_ref PersistentVolumeV1#secret_ref}
  */
  readonly secretRef?: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef;
}

export function persistentVolumeV1SpecPersistentVolumeSourceFlexVolumeToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: persistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefToTerraform(struct!.secretRef),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._driver) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._options) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume | undefined) {
    if (value === undefined) {
      this._driver = undefined;
      this._fsType = undefined;
      this._options = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
    }
    else {
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._options = value.options;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string } | cdktf.IResolvable; 
  public get options() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('options') as any;
  }
  public set options(value: { [key: string]: string } | cdktf.IResolvable) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference(this as any, "secret_ref", true);
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceFlocker {
  /**
  * Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#dataset_name PersistentVolumeV1#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * UUID of the dataset. This is unique identifier of a Flocker dataset
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#dataset_uuid PersistentVolumeV1#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceFlockerToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceFlocker): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceFlocker | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._datasetName) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    if (this._datasetUuid) {
      hasAnyValues = true;
      internalValueResult.datasetUuid = this._datasetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceFlocker | undefined) {
    if (value === undefined) {
      this._datasetName = undefined;
      this._datasetUuid = undefined;
    }
    else {
      this._datasetName = value.datasetName;
      this._datasetUuid = value.datasetUuid;
    }
  }

  // dataset_name - computed: false, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // dataset_uuid - computed: false, optional: true, required: false
  private _datasetUuid?: string; 
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
  public set datasetUuid(value: string) {
    this._datasetUuid = value;
  }
  public resetDatasetUuid() {
    this._datasetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUuidInput() {
    return this._datasetUuid;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#fs_type PersistentVolumeV1#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#partition PersistentVolumeV1#partition}
  */
  readonly partition?: number;
  /**
  * Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#pd_name PersistentVolumeV1#pd_name}
  */
  readonly pdName: string;
  /**
  * Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function persistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._fsType) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._pdName) {
      hasAnyValues = true;
      internalValueResult.pdName = this._pdName;
    }
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk | undefined) {
    if (value === undefined) {
      this._fsType = undefined;
      this._partition = undefined;
      this._pdName = undefined;
      this._readOnly = undefined;
    }
    else {
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._pdName = value.pdName;
      this._readOnly = value.readOnly;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // pd_name - computed: false, optional: false, required: true
  private _pdName?: string; 
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }
  public set pdName(value: string) {
    this._pdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdNameInput() {
    return this._pdName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs {
  /**
  * The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#endpoints_name PersistentVolumeV1#endpoints_name}
  */
  readonly endpointsName: string;
  /**
  * The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#path PersistentVolumeV1#path}
  */
  readonly path: string;
  /**
  * Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function persistentVolumeV1SpecPersistentVolumeSourceGlusterfsToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints_name: cdktf.stringToTerraform(struct!.endpointsName),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._endpointsName) {
      hasAnyValues = true;
      internalValueResult.endpointsName = this._endpointsName;
    }
    if (this._path) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs | undefined) {
    if (value === undefined) {
      this._endpointsName = undefined;
      this._path = undefined;
      this._readOnly = undefined;
    }
    else {
      this._endpointsName = value.endpointsName;
      this._path = value.path;
      this._readOnly = value.readOnly;
    }
  }

  // endpoints_name - computed: false, optional: false, required: true
  private _endpointsName?: string; 
  public get endpointsName() {
    return this.getStringAttribute('endpoints_name');
  }
  public set endpointsName(value: string) {
    this._endpointsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsNameInput() {
    return this._endpointsName;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceHostPath {
  /**
  * Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#path PersistentVolumeV1#path}
  */
  readonly path?: string;
  /**
  * Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#type PersistentVolumeV1#type}
  */
  readonly type?: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceHostPathToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceHostPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceHostPath | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._path) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceHostPath | undefined) {
    if (value === undefined) {
      this._path = undefined;
      this._type = undefined;
    }
    else {
      this._path = value.path;
      this._type = value.type;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceIscsi {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#fs_type PersistentVolumeV1#fs_type}
  */
  readonly fsType?: string;
  /**
  * Target iSCSI Qualified Name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#iqn PersistentVolumeV1#iqn}
  */
  readonly iqn: string;
  /**
  * iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#iscsi_interface PersistentVolumeV1#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * iSCSI target lun number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#lun PersistentVolumeV1#lun}
  */
  readonly lun?: number;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#target_portal PersistentVolumeV1#target_portal}
  */
  readonly targetPortal: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceIscsiToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceIscsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceIscsi | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._fsType) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._iqn) {
      hasAnyValues = true;
      internalValueResult.iqn = this._iqn;
    }
    if (this._iscsiInterface) {
      hasAnyValues = true;
      internalValueResult.iscsiInterface = this._iscsiInterface;
    }
    if (this._lun) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._targetPortal) {
      hasAnyValues = true;
      internalValueResult.targetPortal = this._targetPortal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceIscsi | undefined) {
    if (value === undefined) {
      this._fsType = undefined;
      this._iqn = undefined;
      this._iscsiInterface = undefined;
      this._lun = undefined;
      this._readOnly = undefined;
      this._targetPortal = undefined;
    }
    else {
      this._fsType = value.fsType;
      this._iqn = value.iqn;
      this._iscsiInterface = value.iscsiInterface;
      this._lun = value.lun;
      this._readOnly = value.readOnly;
      this._targetPortal = value.targetPortal;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // iqn - computed: false, optional: false, required: true
  private _iqn?: string; 
  public get iqn() {
    return this.getStringAttribute('iqn');
  }
  public set iqn(value: string) {
    this._iqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iqnInput() {
    return this._iqn;
  }

  // iscsi_interface - computed: false, optional: true, required: false
  private _iscsiInterface?: string; 
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }
  public set iscsiInterface(value: string) {
    this._iscsiInterface = value;
  }
  public resetIscsiInterface() {
    this._iscsiInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInterfaceInput() {
    return this._iscsiInterface;
  }

  // lun - computed: false, optional: true, required: false
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // target_portal - computed: false, optional: false, required: true
  private _targetPortal?: string; 
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
  public set targetPortal(value: string) {
    this._targetPortal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortalInput() {
    return this._targetPortal;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceLocal {
  /**
  * Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#path PersistentVolumeV1#path}
  */
  readonly path?: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceLocalToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceLocal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceLocal | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._path) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceLocal | undefined) {
    if (value === undefined) {
      this._path = undefined;
    }
    else {
      this._path = value.path;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceNfs {
  /**
  * Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#path PersistentVolumeV1#path}
  */
  readonly path: string;
  /**
  * Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#server PersistentVolumeV1#server}
  */
  readonly server: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceNfsToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceNfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceNfs | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._path) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._server) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceNfs | undefined) {
    if (value === undefined) {
      this._path = undefined;
      this._readOnly = undefined;
      this._server = undefined;
    }
    else {
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._server = value.server;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#fs_type PersistentVolumeV1#fs_type}
  */
  readonly fsType?: string;
  /**
  * ID that identifies Photon Controller persistent disk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#pd_id PersistentVolumeV1#pd_id}
  */
  readonly pdId: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference | PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._fsType) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._pdId) {
      hasAnyValues = true;
      internalValueResult.pdId = this._pdId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk | undefined) {
    if (value === undefined) {
      this._fsType = undefined;
      this._pdId = undefined;
    }
    else {
      this._fsType = value.fsType;
      this._pdId = value.pdId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // pd_id - computed: false, optional: false, required: true
  private _pdId?: string; 
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
  public set pdId(value: string) {
    this._pdId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdIdInput() {
    return this._pdId;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceQuobyte {
  /**
  * Group to map volume access to Default is no group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#group PersistentVolumeV1#group}
  */
  readonly group?: string;
  /**
  * Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#registry PersistentVolumeV1#registry}
  */
  readonly registry: string;
  /**
  * User to map volume access to Defaults to serivceaccount user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#user PersistentVolumeV1#user}
  */
  readonly user?: string;
  /**
  * Volume is a string that references an already created Quobyte volume by name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#volume PersistentVolumeV1#volume}
  */
  readonly volume: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceQuobyteToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceQuobyte): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceQuobyte | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._group) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._registry) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._user) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._volume) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceQuobyte | undefined) {
    if (value === undefined) {
      this._group = undefined;
      this._readOnly = undefined;
      this._registry = undefined;
      this._user = undefined;
      this._volume = undefined;
    }
    else {
      this._group = value.group;
      this._readOnly = value.readOnly;
      this._registry = value.registry;
      this._user = value.user;
      this._volume = value.volume;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#name PersistentVolumeV1#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#namespace PersistentVolumeV1#namespace}
  */
  readonly namespace?: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
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

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef | undefined) {
    if (value === undefined) {
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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
export interface PersistentVolumeV1SpecPersistentVolumeSourceRbd {
  /**
  * A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#ceph_monitors PersistentVolumeV1#ceph_monitors}
  */
  readonly cephMonitors: string[];
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#fs_type PersistentVolumeV1#fs_type}
  */
  readonly fsType?: string;
  /**
  * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#keyring PersistentVolumeV1#keyring}
  */
  readonly keyring?: string;
  /**
  * The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#rados_user PersistentVolumeV1#rados_user}
  */
  readonly radosUser?: string;
  /**
  * The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#rbd_image PersistentVolumeV1#rbd_image}
  */
  readonly rbdImage: string;
  /**
  * The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#rbd_pool PersistentVolumeV1#rbd_pool}
  */
  readonly rbdPool?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#read_only PersistentVolumeV1#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#secret_ref PersistentVolumeV1#secret_ref}
  */
  readonly secretRef?: PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef;
}

export function persistentVolumeV1SpecPersistentVolumeSourceRbdToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceRbd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ceph_monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cephMonitors),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    rados_user: cdktf.stringToTerraform(struct!.radosUser),
    rbd_image: cdktf.stringToTerraform(struct!.rbdImage),
    rbd_pool: cdktf.stringToTerraform(struct!.rbdPool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: persistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefToTerraform(struct!.secretRef),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceRbd | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._cephMonitors) {
      hasAnyValues = true;
      internalValueResult.cephMonitors = this._cephMonitors;
    }
    if (this._fsType) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._keyring) {
      hasAnyValues = true;
      internalValueResult.keyring = this._keyring;
    }
    if (this._radosUser) {
      hasAnyValues = true;
      internalValueResult.radosUser = this._radosUser;
    }
    if (this._rbdImage) {
      hasAnyValues = true;
      internalValueResult.rbdImage = this._rbdImage;
    }
    if (this._rbdPool) {
      hasAnyValues = true;
      internalValueResult.rbdPool = this._rbdPool;
    }
    if (this._readOnly) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceRbd | undefined) {
    if (value === undefined) {
      this._cephMonitors = undefined;
      this._fsType = undefined;
      this._keyring = undefined;
      this._radosUser = undefined;
      this._rbdImage = undefined;
      this._rbdPool = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
    }
    else {
      this._cephMonitors = value.cephMonitors;
      this._fsType = value.fsType;
      this._keyring = value.keyring;
      this._radosUser = value.radosUser;
      this._rbdImage = value.rbdImage;
      this._rbdPool = value.rbdPool;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // ceph_monitors - computed: false, optional: false, required: true
  private _cephMonitors?: string[]; 
  public get cephMonitors() {
    return this.getListAttribute('ceph_monitors');
  }
  public set cephMonitors(value: string[]) {
    this._cephMonitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cephMonitorsInput() {
    return this._cephMonitors;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // keyring - computed: true, optional: true, required: false
  private _keyring?: string; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring;
  }

  // rados_user - computed: false, optional: true, required: false
  private _radosUser?: string; 
  public get radosUser() {
    return this.getStringAttribute('rados_user');
  }
  public set radosUser(value: string) {
    this._radosUser = value;
  }
  public resetRadosUser() {
    this._radosUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radosUserInput() {
    return this._radosUser;
  }

  // rbd_image - computed: false, optional: false, required: true
  private _rbdImage?: string; 
  public get rbdImage() {
    return this.getStringAttribute('rbd_image');
  }
  public set rbdImage(value: string) {
    this._rbdImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdImageInput() {
    return this._rbdImage;
  }

  // rbd_pool - computed: false, optional: true, required: false
  private _rbdPool?: string; 
  public get rbdPool() {
    return this.getStringAttribute('rbd_pool');
  }
  public set rbdPool(value: string) {
    this._rbdPool = value;
  }
  public resetRbdPool() {
    this._rbdPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdPoolInput() {
    return this._rbdPool;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference(this as any, "secret_ref", true);
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#fs_type PersistentVolumeV1#fs_type}
  */
  readonly fsType?: string;
  /**
  * Path that identifies vSphere volume vmdk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#volume_path PersistentVolumeV1#volume_path}
  */
  readonly volumePath: string;
}

export function persistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._fsType) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._volumePath) {
      hasAnyValues = true;
      internalValueResult.volumePath = this._volumePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume | undefined) {
    if (value === undefined) {
      this._fsType = undefined;
      this._volumePath = undefined;
    }
    else {
      this._fsType = value.fsType;
      this._volumePath = value.volumePath;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }
}
export interface PersistentVolumeV1SpecPersistentVolumeSource {
  /**
  * aws_elastic_block_store block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#aws_elastic_block_store PersistentVolumeV1#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore;
  /**
  * azure_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#azure_disk PersistentVolumeV1#azure_disk}
  */
  readonly azureDisk?: PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk;
  /**
  * azure_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#azure_file PersistentVolumeV1#azure_file}
  */
  readonly azureFile?: PersistentVolumeV1SpecPersistentVolumeSourceAzureFile;
  /**
  * ceph_fs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#ceph_fs PersistentVolumeV1#ceph_fs}
  */
  readonly cephFs?: PersistentVolumeV1SpecPersistentVolumeSourceCephFs;
  /**
  * cinder block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#cinder PersistentVolumeV1#cinder}
  */
  readonly cinder?: PersistentVolumeV1SpecPersistentVolumeSourceCinder;
  /**
  * csi block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#csi PersistentVolumeV1#csi}
  */
  readonly csi?: PersistentVolumeV1SpecPersistentVolumeSourceCsi;
  /**
  * fc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#fc PersistentVolumeV1#fc}
  */
  readonly fc?: PersistentVolumeV1SpecPersistentVolumeSourceFc;
  /**
  * flex_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#flex_volume PersistentVolumeV1#flex_volume}
  */
  readonly flexVolume?: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume;
  /**
  * flocker block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#flocker PersistentVolumeV1#flocker}
  */
  readonly flocker?: PersistentVolumeV1SpecPersistentVolumeSourceFlocker;
  /**
  * gce_persistent_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#gce_persistent_disk PersistentVolumeV1#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk;
  /**
  * glusterfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#glusterfs PersistentVolumeV1#glusterfs}
  */
  readonly glusterfs?: PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs;
  /**
  * host_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#host_path PersistentVolumeV1#host_path}
  */
  readonly hostPath?: PersistentVolumeV1SpecPersistentVolumeSourceHostPath;
  /**
  * iscsi block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#iscsi PersistentVolumeV1#iscsi}
  */
  readonly iscsi?: PersistentVolumeV1SpecPersistentVolumeSourceIscsi;
  /**
  * local block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#local PersistentVolumeV1#local}
  */
  readonly local?: PersistentVolumeV1SpecPersistentVolumeSourceLocal;
  /**
  * nfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#nfs PersistentVolumeV1#nfs}
  */
  readonly nfs?: PersistentVolumeV1SpecPersistentVolumeSourceNfs;
  /**
  * photon_persistent_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#photon_persistent_disk PersistentVolumeV1#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk;
  /**
  * quobyte block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#quobyte PersistentVolumeV1#quobyte}
  */
  readonly quobyte?: PersistentVolumeV1SpecPersistentVolumeSourceQuobyte;
  /**
  * rbd block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#rbd PersistentVolumeV1#rbd}
  */
  readonly rbd?: PersistentVolumeV1SpecPersistentVolumeSourceRbd;
  /**
  * vsphere_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#vsphere_volume PersistentVolumeV1#vsphere_volume}
  */
  readonly vsphereVolume?: PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume;
}

export function persistentVolumeV1SpecPersistentVolumeSourceToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceOutputReference | PersistentVolumeV1SpecPersistentVolumeSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: persistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: persistentVolumeV1SpecPersistentVolumeSourceAzureDiskToTerraform(struct!.azureDisk),
    azure_file: persistentVolumeV1SpecPersistentVolumeSourceAzureFileToTerraform(struct!.azureFile),
    ceph_fs: persistentVolumeV1SpecPersistentVolumeSourceCephFsToTerraform(struct!.cephFs),
    cinder: persistentVolumeV1SpecPersistentVolumeSourceCinderToTerraform(struct!.cinder),
    csi: persistentVolumeV1SpecPersistentVolumeSourceCsiToTerraform(struct!.csi),
    fc: persistentVolumeV1SpecPersistentVolumeSourceFcToTerraform(struct!.fc),
    flex_volume: persistentVolumeV1SpecPersistentVolumeSourceFlexVolumeToTerraform(struct!.flexVolume),
    flocker: persistentVolumeV1SpecPersistentVolumeSourceFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: persistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    glusterfs: persistentVolumeV1SpecPersistentVolumeSourceGlusterfsToTerraform(struct!.glusterfs),
    host_path: persistentVolumeV1SpecPersistentVolumeSourceHostPathToTerraform(struct!.hostPath),
    iscsi: persistentVolumeV1SpecPersistentVolumeSourceIscsiToTerraform(struct!.iscsi),
    local: persistentVolumeV1SpecPersistentVolumeSourceLocalToTerraform(struct!.local),
    nfs: persistentVolumeV1SpecPersistentVolumeSourceNfsToTerraform(struct!.nfs),
    photon_persistent_disk: persistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    quobyte: persistentVolumeV1SpecPersistentVolumeSourceQuobyteToTerraform(struct!.quobyte),
    rbd: persistentVolumeV1SpecPersistentVolumeSourceRbdToTerraform(struct!.rbd),
    vsphere_volume: persistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}

export class PersistentVolumeV1SpecPersistentVolumeSourceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1SpecPersistentVolumeSource | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._awsElasticBlockStore) {
      hasAnyValues = true;
      internalValueResult.awsElasticBlockStore = this._awsElasticBlockStore?.internalValue;
    }
    if (this._azureDisk) {
      hasAnyValues = true;
      internalValueResult.azureDisk = this._azureDisk?.internalValue;
    }
    if (this._azureFile) {
      hasAnyValues = true;
      internalValueResult.azureFile = this._azureFile?.internalValue;
    }
    if (this._cephFs) {
      hasAnyValues = true;
      internalValueResult.cephFs = this._cephFs?.internalValue;
    }
    if (this._cinder) {
      hasAnyValues = true;
      internalValueResult.cinder = this._cinder?.internalValue;
    }
    if (this._csi) {
      hasAnyValues = true;
      internalValueResult.csi = this._csi?.internalValue;
    }
    if (this._fc) {
      hasAnyValues = true;
      internalValueResult.fc = this._fc?.internalValue;
    }
    if (this._flexVolume) {
      hasAnyValues = true;
      internalValueResult.flexVolume = this._flexVolume?.internalValue;
    }
    if (this._flocker) {
      hasAnyValues = true;
      internalValueResult.flocker = this._flocker?.internalValue;
    }
    if (this._gcePersistentDisk) {
      hasAnyValues = true;
      internalValueResult.gcePersistentDisk = this._gcePersistentDisk?.internalValue;
    }
    if (this._glusterfs) {
      hasAnyValues = true;
      internalValueResult.glusterfs = this._glusterfs?.internalValue;
    }
    if (this._hostPath) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath?.internalValue;
    }
    if (this._iscsi) {
      hasAnyValues = true;
      internalValueResult.iscsi = this._iscsi?.internalValue;
    }
    if (this._local) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    if (this._nfs) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    if (this._photonPersistentDisk) {
      hasAnyValues = true;
      internalValueResult.photonPersistentDisk = this._photonPersistentDisk?.internalValue;
    }
    if (this._quobyte) {
      hasAnyValues = true;
      internalValueResult.quobyte = this._quobyte?.internalValue;
    }
    if (this._rbd) {
      hasAnyValues = true;
      internalValueResult.rbd = this._rbd?.internalValue;
    }
    if (this._vsphereVolume) {
      hasAnyValues = true;
      internalValueResult.vsphereVolume = this._vsphereVolume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1SpecPersistentVolumeSource | undefined) {
    if (value === undefined) {
      this._awsElasticBlockStore.internalValue = undefined;
      this._azureDisk.internalValue = undefined;
      this._azureFile.internalValue = undefined;
      this._cephFs.internalValue = undefined;
      this._cinder.internalValue = undefined;
      this._csi.internalValue = undefined;
      this._fc.internalValue = undefined;
      this._flexVolume.internalValue = undefined;
      this._flocker.internalValue = undefined;
      this._gcePersistentDisk.internalValue = undefined;
      this._glusterfs.internalValue = undefined;
      this._hostPath.internalValue = undefined;
      this._iscsi.internalValue = undefined;
      this._local.internalValue = undefined;
      this._nfs.internalValue = undefined;
      this._photonPersistentDisk.internalValue = undefined;
      this._quobyte.internalValue = undefined;
      this._rbd.internalValue = undefined;
      this._vsphereVolume.internalValue = undefined;
    }
    else {
      this._awsElasticBlockStore.internalValue = value.awsElasticBlockStore;
      this._azureDisk.internalValue = value.azureDisk;
      this._azureFile.internalValue = value.azureFile;
      this._cephFs.internalValue = value.cephFs;
      this._cinder.internalValue = value.cinder;
      this._csi.internalValue = value.csi;
      this._fc.internalValue = value.fc;
      this._flexVolume.internalValue = value.flexVolume;
      this._flocker.internalValue = value.flocker;
      this._gcePersistentDisk.internalValue = value.gcePersistentDisk;
      this._glusterfs.internalValue = value.glusterfs;
      this._hostPath.internalValue = value.hostPath;
      this._iscsi.internalValue = value.iscsi;
      this._local.internalValue = value.local;
      this._nfs.internalValue = value.nfs;
      this._photonPersistentDisk.internalValue = value.photonPersistentDisk;
      this._quobyte.internalValue = value.quobyte;
      this._rbd.internalValue = value.rbd;
      this._vsphereVolume.internalValue = value.vsphereVolume;
    }
  }

  // aws_elastic_block_store - computed: false, optional: true, required: false
  private _awsElasticBlockStore = new PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference(this as any, "aws_elastic_block_store", true);
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore) {
    this._awsElasticBlockStore.internalValue = value;
  }
  public resetAwsElasticBlockStore() {
    this._awsElasticBlockStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsElasticBlockStoreInput() {
    return this._awsElasticBlockStore.internalValue;
  }

  // azure_disk - computed: false, optional: true, required: false
  private _azureDisk = new PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference(this as any, "azure_disk", true);
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk) {
    this._azureDisk.internalValue = value;
  }
  public resetAzureDisk() {
    this._azureDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDiskInput() {
    return this._azureDisk.internalValue;
  }

  // azure_file - computed: false, optional: true, required: false
  private _azureFile = new PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference(this as any, "azure_file", true);
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: PersistentVolumeV1SpecPersistentVolumeSourceAzureFile) {
    this._azureFile.internalValue = value;
  }
  public resetAzureFile() {
    this._azureFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFileInput() {
    return this._azureFile.internalValue;
  }

  // ceph_fs - computed: false, optional: true, required: false
  private _cephFs = new PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference(this as any, "ceph_fs", true);
  public get cephFs() {
    return this._cephFs;
  }
  public putCephFs(value: PersistentVolumeV1SpecPersistentVolumeSourceCephFs) {
    this._cephFs.internalValue = value;
  }
  public resetCephFs() {
    this._cephFs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cephFsInput() {
    return this._cephFs.internalValue;
  }

  // cinder - computed: false, optional: true, required: false
  private _cinder = new PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference(this as any, "cinder", true);
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: PersistentVolumeV1SpecPersistentVolumeSourceCinder) {
    this._cinder.internalValue = value;
  }
  public resetCinder() {
    this._cinder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cinderInput() {
    return this._cinder.internalValue;
  }

  // csi - computed: false, optional: true, required: false
  private _csi = new PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference(this as any, "csi", true);
  public get csi() {
    return this._csi;
  }
  public putCsi(value: PersistentVolumeV1SpecPersistentVolumeSourceCsi) {
    this._csi.internalValue = value;
  }
  public resetCsi() {
    this._csi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiInput() {
    return this._csi.internalValue;
  }

  // fc - computed: false, optional: true, required: false
  private _fc = new PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference(this as any, "fc", true);
  public get fc() {
    return this._fc;
  }
  public putFc(value: PersistentVolumeV1SpecPersistentVolumeSourceFc) {
    this._fc.internalValue = value;
  }
  public resetFc() {
    this._fc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcInput() {
    return this._fc.internalValue;
  }

  // flex_volume - computed: false, optional: true, required: false
  private _flexVolume = new PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference(this as any, "flex_volume", true);
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume) {
    this._flexVolume.internalValue = value;
  }
  public resetFlexVolume() {
    this._flexVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexVolumeInput() {
    return this._flexVolume.internalValue;
  }

  // flocker - computed: false, optional: true, required: false
  private _flocker = new PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference(this as any, "flocker", true);
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: PersistentVolumeV1SpecPersistentVolumeSourceFlocker) {
    this._flocker.internalValue = value;
  }
  public resetFlocker() {
    this._flocker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flockerInput() {
    return this._flocker.internalValue;
  }

  // gce_persistent_disk - computed: false, optional: true, required: false
  private _gcePersistentDisk = new PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference(this as any, "gce_persistent_disk", true);
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk) {
    this._gcePersistentDisk.internalValue = value;
  }
  public resetGcePersistentDisk() {
    this._gcePersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePersistentDiskInput() {
    return this._gcePersistentDisk.internalValue;
  }

  // glusterfs - computed: false, optional: true, required: false
  private _glusterfs = new PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference(this as any, "glusterfs", true);
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs) {
    this._glusterfs.internalValue = value;
  }
  public resetGlusterfs() {
    this._glusterfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glusterfsInput() {
    return this._glusterfs.internalValue;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath = new PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference(this as any, "host_path", true);
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: PersistentVolumeV1SpecPersistentVolumeSourceHostPath) {
    this._hostPath.internalValue = value;
  }
  public resetHostPath() {
    this._hostPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath.internalValue;
  }

  // iscsi - computed: false, optional: true, required: false
  private _iscsi = new PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference(this as any, "iscsi", true);
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: PersistentVolumeV1SpecPersistentVolumeSourceIscsi) {
    this._iscsi.internalValue = value;
  }
  public resetIscsi() {
    this._iscsi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInput() {
    return this._iscsi.internalValue;
  }

  // local - computed: false, optional: true, required: false
  private _local = new PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference(this as any, "local", true);
  public get local() {
    return this._local;
  }
  public putLocal(value: PersistentVolumeV1SpecPersistentVolumeSourceLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }

  // nfs - computed: false, optional: true, required: false
  private _nfs = new PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference(this as any, "nfs", true);
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: PersistentVolumeV1SpecPersistentVolumeSourceNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }

  // photon_persistent_disk - computed: false, optional: true, required: false
  private _photonPersistentDisk = new PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference(this as any, "photon_persistent_disk", true);
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk) {
    this._photonPersistentDisk.internalValue = value;
  }
  public resetPhotonPersistentDisk() {
    this._photonPersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonPersistentDiskInput() {
    return this._photonPersistentDisk.internalValue;
  }

  // quobyte - computed: false, optional: true, required: false
  private _quobyte = new PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference(this as any, "quobyte", true);
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: PersistentVolumeV1SpecPersistentVolumeSourceQuobyte) {
    this._quobyte.internalValue = value;
  }
  public resetQuobyte() {
    this._quobyte.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quobyteInput() {
    return this._quobyte.internalValue;
  }

  // rbd - computed: false, optional: true, required: false
  private _rbd = new PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference(this as any, "rbd", true);
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: PersistentVolumeV1SpecPersistentVolumeSourceRbd) {
    this._rbd.internalValue = value;
  }
  public resetRbd() {
    this._rbd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdInput() {
    return this._rbd.internalValue;
  }

  // vsphere_volume - computed: false, optional: true, required: false
  private _vsphereVolume = new PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference(this as any, "vsphere_volume", true);
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume) {
    this._vsphereVolume.internalValue = value;
  }
  public resetVsphereVolume() {
    this._vsphereVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereVolumeInput() {
    return this._vsphereVolume.internalValue;
  }
}
export interface PersistentVolumeV1Spec {
  /**
  * Contains all ways the volume can be mounted. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#access_modes PersistentVolumeV1#access_modes}
  */
  readonly accessModes: string[];
  /**
  * A description of the persistent volume's resources and capacity. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#capacity
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#capacity PersistentVolumeV1#capacity}
  */
  readonly capacity: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#mount_options PersistentVolumeV1#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * What happens to a persistent volume when released from its claim. Valid options are Retain (default) and Recycle. Recycling must be supported by the volume plugin underlying this persistent volume. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#recycling-policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#persistent_volume_reclaim_policy PersistentVolumeV1#persistent_volume_reclaim_policy}
  */
  readonly persistentVolumeReclaimPolicy?: string;
  /**
  * A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#storage_class_name PersistentVolumeV1#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * Defines if a volume is intended to be used with a formatted filesystem. or to remain in raw block state.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#volume_mode PersistentVolumeV1#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * claim_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#claim_ref PersistentVolumeV1#claim_ref}
  */
  readonly claimRef?: PersistentVolumeV1SpecClaimRef;
  /**
  * node_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#node_affinity PersistentVolumeV1#node_affinity}
  */
  readonly nodeAffinity?: PersistentVolumeV1SpecNodeAffinity;
  /**
  * persistent_volume_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#persistent_volume_source PersistentVolumeV1#persistent_volume_source}
  */
  readonly persistentVolumeSource: PersistentVolumeV1SpecPersistentVolumeSource;
}

export function persistentVolumeV1SpecToTerraform(struct?: PersistentVolumeV1Spec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessModes),
    capacity: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.capacity),
    mount_options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.mountOptions),
    persistent_volume_reclaim_policy: cdktf.stringToTerraform(struct!.persistentVolumeReclaimPolicy),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    claim_ref: persistentVolumeV1SpecClaimRefToTerraform(struct!.claimRef),
    node_affinity: persistentVolumeV1SpecNodeAffinityToTerraform(struct!.nodeAffinity),
    persistent_volume_source: persistentVolumeV1SpecPersistentVolumeSourceToTerraform(struct!.persistentVolumeSource),
  }
}

export interface PersistentVolumeV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html#create PersistentVolumeV1#create}
  */
  readonly create?: string;
}

export function persistentVolumeV1TimeoutsToTerraform(struct?: PersistentVolumeV1TimeoutsOutputReference | PersistentVolumeV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class PersistentVolumeV1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PersistentVolumeV1Timeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PersistentVolumeV1Timeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
    }
    else {
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html kubernetes_persistent_volume_v1}
*/
export class PersistentVolumeV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_persistent_volume_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_v1.html kubernetes_persistent_volume_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PersistentVolumeV1Config
  */
  public constructor(scope: Construct, id: string, config: PersistentVolumeV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_persistent_volume_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata.internalValue = config.metadata;
    this._spec = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new PersistentVolumeV1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: PersistentVolumeV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: PersistentVolumeV1Spec[]; 
  public get spec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: PersistentVolumeV1Spec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PersistentVolumeV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PersistentVolumeV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: persistentVolumeV1MetadataToTerraform(this._metadata.internalValue),
      spec: cdktf.listMapper(persistentVolumeV1SpecToTerraform)(this._spec),
      timeouts: persistentVolumeV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}