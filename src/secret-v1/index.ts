/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretV1Config extends cdktf.TerraformMetaArguments {
  /**
  * A map of the secret data in base64 encoding. Use this for binary data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#binary_data SecretV1#binary_data}
  */
  readonly binaryData?: { [key: string]: string };
  /**
  * A write-only map of the secret data in base64 encoding. Use this for binary data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#binary_data_wo SecretV1#binary_data_wo}
  */
  readonly binaryDataWo?: { [key: string]: string };
  /**
  * The current revision of the write-only "binary_data_wo" attribute. Incrementing this integer value will cause Terraform to update the write-only value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#binary_data_wo_revision SecretV1#binary_data_wo_revision}
  */
  readonly binaryDataWoRevision?: number;
  /**
  * A map of the secret data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#data SecretV1#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * A map write-only of the secret data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#data_wo SecretV1#data_wo}
  */
  readonly dataWo?: { [key: string]: string };
  /**
  * The current revision of the write-only "data_wo" attribute. Incrementing this integer value will cause Terraform to update the write-only value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#data_wo_revision SecretV1#data_wo_revision}
  */
  readonly dataWoRevision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#id SecretV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ensures that data stored in the Secret cannot be updated (only object metadata can be modified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#immutable SecretV1#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Type of secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#type SecretV1#type}
  */
  readonly type?: string;
  /**
  * Terraform will wait for the service account token to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#wait_for_service_account_token SecretV1#wait_for_service_account_token}
  */
  readonly waitForServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#metadata SecretV1#metadata}
  */
  readonly metadata: SecretV1Metadata;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#timeouts SecretV1#timeouts}
  */
  readonly timeouts?: SecretV1Timeouts;
}
export interface SecretV1Metadata {
  /**
  * An unstructured key value map stored with the secret that may be used to store arbitrary metadata. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#annotations SecretV1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#generate_name SecretV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the secret. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#labels SecretV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the secret, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#name SecretV1#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the secret must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#namespace SecretV1#namespace}
  */
  readonly namespace?: string;
}

export function secretV1MetadataToTerraform(struct?: SecretV1MetadataOutputReference | SecretV1Metadata): any {
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


export function secretV1MetadataToHclTerraform(struct?: SecretV1MetadataOutputReference | SecretV1Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    generate_name: {
      value: cdktf.stringToHclTerraform(struct!.generateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretV1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretV1Metadata | undefined {
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

  public set internalValue(value: SecretV1Metadata | undefined) {
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
export interface SecretV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#create SecretV1#create}
  */
  readonly create?: string;
}

export function secretV1TimeoutsToTerraform(struct?: SecretV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function secretV1TimeoutsToHclTerraform(struct?: SecretV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1 kubernetes_secret_v1}
*/
export class SecretV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_secret_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretV1 to import
  * @param importFromId The id of the existing SecretV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kubernetes_secret_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/secret_v1 kubernetes_secret_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretV1Config
  */
  public constructor(scope: Construct, id: string, config: SecretV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_secret_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.37.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binaryData = config.binaryData;
    this._binaryDataWo = config.binaryDataWo;
    this._binaryDataWoRevision = config.binaryDataWoRevision;
    this._data = config.data;
    this._dataWo = config.dataWo;
    this._dataWoRevision = config.dataWoRevision;
    this._id = config.id;
    this._immutable = config.immutable;
    this._type = config.type;
    this._waitForServiceAccountToken = config.waitForServiceAccountToken;
    this._metadata.internalValue = config.metadata;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binary_data - computed: false, optional: true, required: false
  private _binaryData?: { [key: string]: string }; 
  public get binaryData() {
    return this.getStringMapAttribute('binary_data');
  }
  public set binaryData(value: { [key: string]: string }) {
    this._binaryData = value;
  }
  public resetBinaryData() {
    this._binaryData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryDataInput() {
    return this._binaryData;
  }

  // binary_data_wo - computed: false, optional: true, required: false
  private _binaryDataWo?: { [key: string]: string }; 
  public get binaryDataWo() {
    return this.getStringMapAttribute('binary_data_wo');
  }
  public set binaryDataWo(value: { [key: string]: string }) {
    this._binaryDataWo = value;
  }
  public resetBinaryDataWo() {
    this._binaryDataWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryDataWoInput() {
    return this._binaryDataWo;
  }

  // binary_data_wo_revision - computed: false, optional: true, required: false
  private _binaryDataWoRevision?: number; 
  public get binaryDataWoRevision() {
    return this.getNumberAttribute('binary_data_wo_revision');
  }
  public set binaryDataWoRevision(value: number) {
    this._binaryDataWoRevision = value;
  }
  public resetBinaryDataWoRevision() {
    this._binaryDataWoRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryDataWoRevisionInput() {
    return this._binaryDataWoRevision;
  }

  // data - computed: true, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // data_wo - computed: false, optional: true, required: false
  private _dataWo?: { [key: string]: string }; 
  public get dataWo() {
    return this.getStringMapAttribute('data_wo');
  }
  public set dataWo(value: { [key: string]: string }) {
    this._dataWo = value;
  }
  public resetDataWo() {
    this._dataWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataWoInput() {
    return this._dataWo;
  }

  // data_wo_revision - computed: false, optional: true, required: false
  private _dataWoRevision?: number; 
  public get dataWoRevision() {
    return this.getNumberAttribute('data_wo_revision');
  }
  public set dataWoRevision(value: number) {
    this._dataWoRevision = value;
  }
  public resetDataWoRevision() {
    this._dataWoRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataWoRevisionInput() {
    return this._dataWoRevision;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // immutable - computed: false, optional: true, required: false
  private _immutable?: boolean | cdktf.IResolvable; 
  public get immutable() {
    return this.getBooleanAttribute('immutable');
  }
  public set immutable(value: boolean | cdktf.IResolvable) {
    this._immutable = value;
  }
  public resetImmutable() {
    this._immutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableInput() {
    return this._immutable;
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

  // wait_for_service_account_token - computed: false, optional: true, required: false
  private _waitForServiceAccountToken?: boolean | cdktf.IResolvable; 
  public get waitForServiceAccountToken() {
    return this.getBooleanAttribute('wait_for_service_account_token');
  }
  public set waitForServiceAccountToken(value: boolean | cdktf.IResolvable) {
    this._waitForServiceAccountToken = value;
  }
  public resetWaitForServiceAccountToken() {
    this._waitForServiceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForServiceAccountTokenInput() {
    return this._waitForServiceAccountToken;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new SecretV1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: SecretV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecretV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecretV1Timeouts) {
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
      binary_data: cdktf.hashMapper(cdktf.stringToTerraform)(this._binaryData),
      binary_data_wo: cdktf.hashMapper(cdktf.stringToTerraform)(this._binaryDataWo),
      binary_data_wo_revision: cdktf.numberToTerraform(this._binaryDataWoRevision),
      data: cdktf.hashMapper(cdktf.stringToTerraform)(this._data),
      data_wo: cdktf.hashMapper(cdktf.stringToTerraform)(this._dataWo),
      data_wo_revision: cdktf.numberToTerraform(this._dataWoRevision),
      id: cdktf.stringToTerraform(this._id),
      immutable: cdktf.booleanToTerraform(this._immutable),
      type: cdktf.stringToTerraform(this._type),
      wait_for_service_account_token: cdktf.booleanToTerraform(this._waitForServiceAccountToken),
      metadata: secretV1MetadataToTerraform(this._metadata.internalValue),
      timeouts: secretV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      binary_data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._binaryData),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      binary_data_wo: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._binaryDataWo),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      binary_data_wo_revision: {
        value: cdktf.numberToHclTerraform(this._binaryDataWoRevision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._data),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      data_wo: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dataWo),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      data_wo_revision: {
        value: cdktf.numberToHclTerraform(this._dataWoRevision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      immutable: {
        value: cdktf.booleanToHclTerraform(this._immutable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_service_account_token: {
        value: cdktf.booleanToHclTerraform(this._waitForServiceAccountToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: secretV1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretV1MetadataList",
      },
      timeouts: {
        value: secretV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
