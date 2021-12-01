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

function persistentVolumeV1MetadataToTerraform(struct?: PersistentVolumeV1MetadataOutputReference | PersistentVolumeV1Metadata): any {
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

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

function persistentVolumeV1SpecClaimRefToTerraform(struct?: PersistentVolumeV1SpecClaimRefOutputReference | PersistentVolumeV1SpecClaimRef): any {
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
    return this._name
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
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

function persistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsToTerraform(struct?: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions): any {
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

function persistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsToTerraform(struct?: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields): any {
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

function persistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermToTerraform(struct?: PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm): any {
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

function persistentVolumeV1SpecNodeAffinityRequiredToTerraform(struct?: PersistentVolumeV1SpecNodeAffinityRequiredOutputReference | PersistentVolumeV1SpecNodeAffinityRequired): any {
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
    return this._nodeSelectorTerm
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

function persistentVolumeV1SpecNodeAffinityToTerraform(struct?: PersistentVolumeV1SpecNodeAffinityOutputReference | PersistentVolumeV1SpecNodeAffinity): any {
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

  // required - computed: false, optional: true, required: false
  private _required?: PersistentVolumeV1SpecNodeAffinityRequired | undefined; 
  private __requiredOutput = new PersistentVolumeV1SpecNodeAffinityRequiredOutputReference(this as any, "required", true);
  public get required() {
    return this.__requiredOutput;
  }
  public putRequired(value: PersistentVolumeV1SpecNodeAffinityRequired | undefined) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required
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

function persistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore): any {
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

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number | undefined; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number | undefined) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
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
    return this._volumeId
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

function persistentVolumeV1SpecPersistentVolumeSourceAzureDiskToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk): any {
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
    return this._cachingMode
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
    return this._dataDiskUri
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
    return this._diskName
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string | undefined; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string | undefined) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
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

function persistentVolumeV1SpecPersistentVolumeSourceAzureFileToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceAzureFile): any {
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
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
    return this._secretName
  }

  // secret_namespace - computed: false, optional: true, required: false
  private _secretNamespace?: string | undefined; 
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }
  public set secretNamespace(value: string | undefined) {
    this._secretNamespace = value;
  }
  public resetSecretNamespace() {
    this._secretNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamespaceInput() {
    return this._secretNamespace
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
    return this._shareName
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

function persistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef): any {
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

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
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

function persistentVolumeV1SpecPersistentVolumeSourceCephFsToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCephFs): any {
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
    return this._monitors
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // secret_file - computed: false, optional: true, required: false
  private _secretFile?: string | undefined; 
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }
  public set secretFile(value: string | undefined) {
    this._secretFile = value;
  }
  public resetSecretFile() {
    this._secretFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFileInput() {
    return this._secretFile
  }

  // user - computed: false, optional: true, required: false
  private _user?: string | undefined; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef?: PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef | undefined; 
  private __secretRefOutput = new PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference(this as any, "secret_ref", true);
  public get secretRef() {
    return this.__secretRefOutput;
  }
  public putSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef | undefined) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef
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

function persistentVolumeV1SpecPersistentVolumeSourceCinderToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCinder): any {
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

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
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
    return this._volumeId
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

function persistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef): any {
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

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
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

function persistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef): any {
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

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
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

function persistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef): any {
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

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
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

function persistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef): any {
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

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
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

function persistentVolumeV1SpecPersistentVolumeSourceCsiToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceCsi): any {
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
    return this._driver
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // volume_attributes - computed: false, optional: true, required: false
  private _volumeAttributes?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get volumeAttributes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('volume_attributes') as any;
  }
  public set volumeAttributes(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._volumeAttributes = value;
  }
  public resetVolumeAttributes() {
    this._volumeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesInput() {
    return this._volumeAttributes
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
    return this._volumeHandle
  }

  // controller_expand_secret_ref - computed: false, optional: true, required: false
  private _controllerExpandSecretRef?: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef | undefined; 
  private __controllerExpandSecretRefOutput = new PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference(this as any, "controller_expand_secret_ref", true);
  public get controllerExpandSecretRef() {
    return this.__controllerExpandSecretRefOutput;
  }
  public putControllerExpandSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef | undefined) {
    this._controllerExpandSecretRef = value;
  }
  public resetControllerExpandSecretRef() {
    this._controllerExpandSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerExpandSecretRefInput() {
    return this._controllerExpandSecretRef
  }

  // controller_publish_secret_ref - computed: false, optional: true, required: false
  private _controllerPublishSecretRef?: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef | undefined; 
  private __controllerPublishSecretRefOutput = new PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference(this as any, "controller_publish_secret_ref", true);
  public get controllerPublishSecretRef() {
    return this.__controllerPublishSecretRefOutput;
  }
  public putControllerPublishSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef | undefined) {
    this._controllerPublishSecretRef = value;
  }
  public resetControllerPublishSecretRef() {
    this._controllerPublishSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerPublishSecretRefInput() {
    return this._controllerPublishSecretRef
  }

  // node_publish_secret_ref - computed: false, optional: true, required: false
  private _nodePublishSecretRef?: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef | undefined; 
  private __nodePublishSecretRefOutput = new PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference(this as any, "node_publish_secret_ref", true);
  public get nodePublishSecretRef() {
    return this.__nodePublishSecretRefOutput;
  }
  public putNodePublishSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef | undefined) {
    this._nodePublishSecretRef = value;
  }
  public resetNodePublishSecretRef() {
    this._nodePublishSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublishSecretRefInput() {
    return this._nodePublishSecretRef
  }

  // node_stage_secret_ref - computed: false, optional: true, required: false
  private _nodeStageSecretRef?: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef | undefined; 
  private __nodeStageSecretRefOutput = new PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference(this as any, "node_stage_secret_ref", true);
  public get nodeStageSecretRef() {
    return this.__nodeStageSecretRefOutput;
  }
  public putNodeStageSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef | undefined) {
    this._nodeStageSecretRef = value;
  }
  public resetNodeStageSecretRef() {
    this._nodeStageSecretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStageSecretRefInput() {
    return this._nodeStageSecretRef
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

function persistentVolumeV1SpecPersistentVolumeSourceFcToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceFc): any {
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

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
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
    return this._lun
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
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
    return this._targetWwNs
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

function persistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef): any {
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

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
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

function persistentVolumeV1SpecPersistentVolumeSourceFlexVolumeToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume): any {
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
    return this._driver
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get options() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('options') as any;
  }
  public set options(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef?: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef | undefined; 
  private __secretRefOutput = new PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference(this as any, "secret_ref", true);
  public get secretRef() {
    return this.__secretRefOutput;
  }
  public putSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef | undefined) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef
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

function persistentVolumeV1SpecPersistentVolumeSourceFlockerToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceFlocker): any {
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

  // dataset_name - computed: false, optional: true, required: false
  private _datasetName?: string | undefined; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string | undefined) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName
  }

  // dataset_uuid - computed: false, optional: true, required: false
  private _datasetUuid?: string | undefined; 
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
  public set datasetUuid(value: string | undefined) {
    this._datasetUuid = value;
  }
  public resetDatasetUuid() {
    this._datasetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUuidInput() {
    return this._datasetUuid
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

function persistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk): any {
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

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number | undefined; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number | undefined) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition
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
    return this._pdName
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
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

function persistentVolumeV1SpecPersistentVolumeSourceGlusterfsToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs): any {
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
    return this._endpointsName
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
    return this._path
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
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

function persistentVolumeV1SpecPersistentVolumeSourceHostPathToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceHostPath): any {
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

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
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

function persistentVolumeV1SpecPersistentVolumeSourceIscsiToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceIscsi): any {
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

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
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
    return this._iqn
  }

  // iscsi_interface - computed: false, optional: true, required: false
  private _iscsiInterface?: string | undefined; 
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }
  public set iscsiInterface(value: string | undefined) {
    this._iscsiInterface = value;
  }
  public resetIscsiInterface() {
    this._iscsiInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInterfaceInput() {
    return this._iscsiInterface
  }

  // lun - computed: false, optional: true, required: false
  private _lun?: number | undefined; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number | undefined) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
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
    return this._targetPortal
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

function persistentVolumeV1SpecPersistentVolumeSourceLocalToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceLocal): any {
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

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
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

function persistentVolumeV1SpecPersistentVolumeSourceNfsToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceNfs): any {
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
    return this._path
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
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
    return this._server
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

function persistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference | PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk): any {
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

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
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
    return this._pdId
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

function persistentVolumeV1SpecPersistentVolumeSourceQuobyteToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceQuobyte): any {
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

  // group - computed: false, optional: true, required: false
  private _group?: string | undefined; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string | undefined) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
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
    return this._registry
  }

  // user - computed: false, optional: true, required: false
  private _user?: string | undefined; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
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
    return this._volume
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

function persistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef): any {
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

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
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

function persistentVolumeV1SpecPersistentVolumeSourceRbdToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceRbd): any {
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
    return this._cephMonitors
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
  }

  // keyring - computed: true, optional: true, required: false
  private _keyring?: string | undefined; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string | undefined) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring
  }

  // rados_user - computed: false, optional: true, required: false
  private _radosUser?: string | undefined; 
  public get radosUser() {
    return this.getStringAttribute('rados_user');
  }
  public set radosUser(value: string | undefined) {
    this._radosUser = value;
  }
  public resetRadosUser() {
    this._radosUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radosUserInput() {
    return this._radosUser
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
    return this._rbdImage
  }

  // rbd_pool - computed: false, optional: true, required: false
  private _rbdPool?: string | undefined; 
  public get rbdPool() {
    return this.getStringAttribute('rbd_pool');
  }
  public set rbdPool(value: string | undefined) {
    this._rbdPool = value;
  }
  public resetRbdPool() {
    this._rbdPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdPoolInput() {
    return this._rbdPool
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef?: PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef | undefined; 
  private __secretRefOutput = new PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference(this as any, "secret_ref", true);
  public get secretRef() {
    return this.__secretRefOutput;
  }
  public putSecretRef(value: PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef | undefined) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef
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

function persistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference | PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume): any {
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

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string | undefined; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string | undefined) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType
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
    return this._volumePath
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

function persistentVolumeV1SpecPersistentVolumeSourceToTerraform(struct?: PersistentVolumeV1SpecPersistentVolumeSourceOutputReference | PersistentVolumeV1SpecPersistentVolumeSource): any {
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

  // aws_elastic_block_store - computed: false, optional: true, required: false
  private _awsElasticBlockStore?: PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore | undefined; 
  private __awsElasticBlockStoreOutput = new PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference(this as any, "aws_elastic_block_store", true);
  public get awsElasticBlockStore() {
    return this.__awsElasticBlockStoreOutput;
  }
  public putAwsElasticBlockStore(value: PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore | undefined) {
    this._awsElasticBlockStore = value;
  }
  public resetAwsElasticBlockStore() {
    this._awsElasticBlockStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsElasticBlockStoreInput() {
    return this._awsElasticBlockStore
  }

  // azure_disk - computed: false, optional: true, required: false
  private _azureDisk?: PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk | undefined; 
  private __azureDiskOutput = new PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference(this as any, "azure_disk", true);
  public get azureDisk() {
    return this.__azureDiskOutput;
  }
  public putAzureDisk(value: PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk | undefined) {
    this._azureDisk = value;
  }
  public resetAzureDisk() {
    this._azureDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDiskInput() {
    return this._azureDisk
  }

  // azure_file - computed: false, optional: true, required: false
  private _azureFile?: PersistentVolumeV1SpecPersistentVolumeSourceAzureFile | undefined; 
  private __azureFileOutput = new PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference(this as any, "azure_file", true);
  public get azureFile() {
    return this.__azureFileOutput;
  }
  public putAzureFile(value: PersistentVolumeV1SpecPersistentVolumeSourceAzureFile | undefined) {
    this._azureFile = value;
  }
  public resetAzureFile() {
    this._azureFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFileInput() {
    return this._azureFile
  }

  // ceph_fs - computed: false, optional: true, required: false
  private _cephFs?: PersistentVolumeV1SpecPersistentVolumeSourceCephFs | undefined; 
  private __cephFsOutput = new PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference(this as any, "ceph_fs", true);
  public get cephFs() {
    return this.__cephFsOutput;
  }
  public putCephFs(value: PersistentVolumeV1SpecPersistentVolumeSourceCephFs | undefined) {
    this._cephFs = value;
  }
  public resetCephFs() {
    this._cephFs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cephFsInput() {
    return this._cephFs
  }

  // cinder - computed: false, optional: true, required: false
  private _cinder?: PersistentVolumeV1SpecPersistentVolumeSourceCinder | undefined; 
  private __cinderOutput = new PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference(this as any, "cinder", true);
  public get cinder() {
    return this.__cinderOutput;
  }
  public putCinder(value: PersistentVolumeV1SpecPersistentVolumeSourceCinder | undefined) {
    this._cinder = value;
  }
  public resetCinder() {
    this._cinder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cinderInput() {
    return this._cinder
  }

  // csi - computed: false, optional: true, required: false
  private _csi?: PersistentVolumeV1SpecPersistentVolumeSourceCsi | undefined; 
  private __csiOutput = new PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference(this as any, "csi", true);
  public get csi() {
    return this.__csiOutput;
  }
  public putCsi(value: PersistentVolumeV1SpecPersistentVolumeSourceCsi | undefined) {
    this._csi = value;
  }
  public resetCsi() {
    this._csi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiInput() {
    return this._csi
  }

  // fc - computed: false, optional: true, required: false
  private _fc?: PersistentVolumeV1SpecPersistentVolumeSourceFc | undefined; 
  private __fcOutput = new PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference(this as any, "fc", true);
  public get fc() {
    return this.__fcOutput;
  }
  public putFc(value: PersistentVolumeV1SpecPersistentVolumeSourceFc | undefined) {
    this._fc = value;
  }
  public resetFc() {
    this._fc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcInput() {
    return this._fc
  }

  // flex_volume - computed: false, optional: true, required: false
  private _flexVolume?: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume | undefined; 
  private __flexVolumeOutput = new PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference(this as any, "flex_volume", true);
  public get flexVolume() {
    return this.__flexVolumeOutput;
  }
  public putFlexVolume(value: PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume | undefined) {
    this._flexVolume = value;
  }
  public resetFlexVolume() {
    this._flexVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexVolumeInput() {
    return this._flexVolume
  }

  // flocker - computed: false, optional: true, required: false
  private _flocker?: PersistentVolumeV1SpecPersistentVolumeSourceFlocker | undefined; 
  private __flockerOutput = new PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference(this as any, "flocker", true);
  public get flocker() {
    return this.__flockerOutput;
  }
  public putFlocker(value: PersistentVolumeV1SpecPersistentVolumeSourceFlocker | undefined) {
    this._flocker = value;
  }
  public resetFlocker() {
    this._flocker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flockerInput() {
    return this._flocker
  }

  // gce_persistent_disk - computed: false, optional: true, required: false
  private _gcePersistentDisk?: PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk | undefined; 
  private __gcePersistentDiskOutput = new PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference(this as any, "gce_persistent_disk", true);
  public get gcePersistentDisk() {
    return this.__gcePersistentDiskOutput;
  }
  public putGcePersistentDisk(value: PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk | undefined) {
    this._gcePersistentDisk = value;
  }
  public resetGcePersistentDisk() {
    this._gcePersistentDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePersistentDiskInput() {
    return this._gcePersistentDisk
  }

  // glusterfs - computed: false, optional: true, required: false
  private _glusterfs?: PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs | undefined; 
  private __glusterfsOutput = new PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference(this as any, "glusterfs", true);
  public get glusterfs() {
    return this.__glusterfsOutput;
  }
  public putGlusterfs(value: PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs | undefined) {
    this._glusterfs = value;
  }
  public resetGlusterfs() {
    this._glusterfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glusterfsInput() {
    return this._glusterfs
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath?: PersistentVolumeV1SpecPersistentVolumeSourceHostPath | undefined; 
  private __hostPathOutput = new PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference(this as any, "host_path", true);
  public get hostPath() {
    return this.__hostPathOutput;
  }
  public putHostPath(value: PersistentVolumeV1SpecPersistentVolumeSourceHostPath | undefined) {
    this._hostPath = value;
  }
  public resetHostPath() {
    this._hostPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath
  }

  // iscsi - computed: false, optional: true, required: false
  private _iscsi?: PersistentVolumeV1SpecPersistentVolumeSourceIscsi | undefined; 
  private __iscsiOutput = new PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference(this as any, "iscsi", true);
  public get iscsi() {
    return this.__iscsiOutput;
  }
  public putIscsi(value: PersistentVolumeV1SpecPersistentVolumeSourceIscsi | undefined) {
    this._iscsi = value;
  }
  public resetIscsi() {
    this._iscsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInput() {
    return this._iscsi
  }

  // local - computed: false, optional: true, required: false
  private _local?: PersistentVolumeV1SpecPersistentVolumeSourceLocal | undefined; 
  private __localOutput = new PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference(this as any, "local", true);
  public get local() {
    return this.__localOutput;
  }
  public putLocal(value: PersistentVolumeV1SpecPersistentVolumeSourceLocal | undefined) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local
  }

  // nfs - computed: false, optional: true, required: false
  private _nfs?: PersistentVolumeV1SpecPersistentVolumeSourceNfs | undefined; 
  private __nfsOutput = new PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference(this as any, "nfs", true);
  public get nfs() {
    return this.__nfsOutput;
  }
  public putNfs(value: PersistentVolumeV1SpecPersistentVolumeSourceNfs | undefined) {
    this._nfs = value;
  }
  public resetNfs() {
    this._nfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs
  }

  // photon_persistent_disk - computed: false, optional: true, required: false
  private _photonPersistentDisk?: PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk | undefined; 
  private __photonPersistentDiskOutput = new PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference(this as any, "photon_persistent_disk", true);
  public get photonPersistentDisk() {
    return this.__photonPersistentDiskOutput;
  }
  public putPhotonPersistentDisk(value: PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk | undefined) {
    this._photonPersistentDisk = value;
  }
  public resetPhotonPersistentDisk() {
    this._photonPersistentDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonPersistentDiskInput() {
    return this._photonPersistentDisk
  }

  // quobyte - computed: false, optional: true, required: false
  private _quobyte?: PersistentVolumeV1SpecPersistentVolumeSourceQuobyte | undefined; 
  private __quobyteOutput = new PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference(this as any, "quobyte", true);
  public get quobyte() {
    return this.__quobyteOutput;
  }
  public putQuobyte(value: PersistentVolumeV1SpecPersistentVolumeSourceQuobyte | undefined) {
    this._quobyte = value;
  }
  public resetQuobyte() {
    this._quobyte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quobyteInput() {
    return this._quobyte
  }

  // rbd - computed: false, optional: true, required: false
  private _rbd?: PersistentVolumeV1SpecPersistentVolumeSourceRbd | undefined; 
  private __rbdOutput = new PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference(this as any, "rbd", true);
  public get rbd() {
    return this.__rbdOutput;
  }
  public putRbd(value: PersistentVolumeV1SpecPersistentVolumeSourceRbd | undefined) {
    this._rbd = value;
  }
  public resetRbd() {
    this._rbd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdInput() {
    return this._rbd
  }

  // vsphere_volume - computed: false, optional: true, required: false
  private _vsphereVolume?: PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume | undefined; 
  private __vsphereVolumeOutput = new PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference(this as any, "vsphere_volume", true);
  public get vsphereVolume() {
    return this.__vsphereVolumeOutput;
  }
  public putVsphereVolume(value: PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume | undefined) {
    this._vsphereVolume = value;
  }
  public resetVsphereVolume() {
    this._vsphereVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereVolumeInput() {
    return this._vsphereVolume
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

function persistentVolumeV1SpecToTerraform(struct?: PersistentVolumeV1Spec): any {
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

function persistentVolumeV1TimeoutsToTerraform(struct?: PersistentVolumeV1TimeoutsOutputReference | PersistentVolumeV1Timeouts): any {
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

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
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
    this._metadata = config.metadata;
    this._spec = config.spec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: PersistentVolumeV1Metadata; 
  private __metadataOutput = new PersistentVolumeV1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: PersistentVolumeV1Metadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PersistentVolumeV1Timeouts | undefined; 
  private __timeoutsOutput = new PersistentVolumeV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PersistentVolumeV1Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: persistentVolumeV1MetadataToTerraform(this._metadata),
      spec: cdktf.listMapper(persistentVolumeV1SpecToTerraform)(this._spec),
      timeouts: persistentVolumeV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
