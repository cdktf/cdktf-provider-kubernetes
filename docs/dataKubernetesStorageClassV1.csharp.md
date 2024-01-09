# `dataKubernetesStorageClassV1` Submodule <a name="`dataKubernetesStorageClassV1` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesStorageClassV1 <a name="DataKubernetesStorageClassV1" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1 kubernetes_storage_class_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesStorageClassV1(Construct Scope, string Id, DataKubernetesStorageClassV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config">DataKubernetesStorageClassV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config">DataKubernetesStorageClassV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putAllowedTopologies">PutAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowedTopologies">ResetAllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowVolumeExpansion">ResetAllowVolumeExpansion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetReclaimPolicy">ResetReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetVolumeBindingMode">ResetVolumeBindingMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAllowedTopologies` <a name="PutAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putAllowedTopologies"></a>

```csharp
private void PutAllowedTopologies(DataKubernetesStorageClassV1AllowedTopologies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putAllowedTopologies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata"></a>

```csharp
private void PutMetadata(DataKubernetesStorageClassV1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

---

##### `ResetAllowedTopologies` <a name="ResetAllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowedTopologies"></a>

```csharp
private void ResetAllowedTopologies()
```

##### `ResetAllowVolumeExpansion` <a name="ResetAllowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetAllowVolumeExpansion"></a>

```csharp
private void ResetAllowVolumeExpansion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetMountOptions"></a>

```csharp
private void ResetMountOptions()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetReclaimPolicy` <a name="ResetReclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetReclaimPolicy"></a>

```csharp
private void ResetReclaimPolicy()
```

##### `ResetVolumeBindingMode` <a name="ResetVolumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.resetVolumeBindingMode"></a>

```csharp
private void ResetVolumeBindingMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesStorageClassV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesStorageClassV1.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesStorageClassV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesStorageClassV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesStorageClassV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataKubernetesStorageClassV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesStorageClassV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesStorageClassV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesStorageClassV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologies">AllowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference">DataKubernetesStorageClassV1AllowedTopologiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference">DataKubernetesStorageClassV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.storageProvisioner">StorageProvisioner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologiesInput">AllowedTopologiesInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansionInput">AllowVolumeExpansionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptionsInput">MountOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicyInput">ReclaimPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingModeInput">VolumeBindingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansion">AllowVolumeExpansion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptions">MountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingMode">VolumeBindingMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AllowedTopologies`<sup>Required</sup> <a name="AllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologies"></a>

```csharp
public DataKubernetesStorageClassV1AllowedTopologiesOutputReference AllowedTopologies { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference">DataKubernetesStorageClassV1AllowedTopologiesOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadata"></a>

```csharp
public DataKubernetesStorageClassV1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference">DataKubernetesStorageClassV1MetadataOutputReference</a>

---

##### `StorageProvisioner`<sup>Required</sup> <a name="StorageProvisioner" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.storageProvisioner"></a>

```csharp
public string StorageProvisioner { get; }
```

- *Type:* string

---

##### `AllowedTopologiesInput`<sup>Optional</sup> <a name="AllowedTopologiesInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowedTopologiesInput"></a>

```csharp
public DataKubernetesStorageClassV1AllowedTopologies AllowedTopologiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

---

##### `AllowVolumeExpansionInput`<sup>Optional</sup> <a name="AllowVolumeExpansionInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansionInput"></a>

```csharp
public object AllowVolumeExpansionInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.metadataInput"></a>

```csharp
public DataKubernetesStorageClassV1Metadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptionsInput"></a>

```csharp
public string[] MountOptionsInput { get; }
```

- *Type:* string[]

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ReclaimPolicyInput`<sup>Optional</sup> <a name="ReclaimPolicyInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicyInput"></a>

```csharp
public string ReclaimPolicyInput { get; }
```

- *Type:* string

---

##### `VolumeBindingModeInput`<sup>Optional</sup> <a name="VolumeBindingModeInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingModeInput"></a>

```csharp
public string VolumeBindingModeInput { get; }
```

- *Type:* string

---

##### `AllowVolumeExpansion`<sup>Required</sup> <a name="AllowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.allowVolumeExpansion"></a>

```csharp
public object AllowVolumeExpansion { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.mountOptions"></a>

```csharp
public string[] MountOptions { get; }
```

- *Type:* string[]

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ReclaimPolicy`<sup>Required</sup> <a name="ReclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.reclaimPolicy"></a>

```csharp
public string ReclaimPolicy { get; }
```

- *Type:* string

---

##### `VolumeBindingMode`<sup>Required</sup> <a name="VolumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.volumeBindingMode"></a>

```csharp
public string VolumeBindingMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesStorageClassV1AllowedTopologies <a name="DataKubernetesStorageClassV1AllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesStorageClassV1AllowedTopologies {
    object MatchLabelExpressions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies.property.matchLabelExpressions">MatchLabelExpressions</a></code> | <code>object</code> | match_label_expressions block. |

---

##### `MatchLabelExpressions`<sup>Optional</sup> <a name="MatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies.property.matchLabelExpressions"></a>

```csharp
public object MatchLabelExpressions { get; set; }
```

- *Type:* object

match_label_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#match_label_expressions DataKubernetesStorageClassV1#match_label_expressions}

---

### DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions <a name="DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions {
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. One value must match the label to be selected. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#key DataKubernetesStorageClassV1#key}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values. One value must match the label to be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#values DataKubernetesStorageClassV1#values}

---

### DataKubernetesStorageClassV1Config <a name="DataKubernetesStorageClassV1Config" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesStorageClassV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataKubernetesStorageClassV1Metadata Metadata,
    DataKubernetesStorageClassV1AllowedTopologies AllowedTopologies = null,
    object AllowVolumeExpansion = null,
    string Id = null,
    string[] MountOptions = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string ReclaimPolicy = null,
    string VolumeBindingMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowedTopologies">AllowedTopologies</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | allowed_topologies block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowVolumeExpansion">AllowVolumeExpansion</a></code> | <code>object</code> | Indicates whether the storage class allow volume expand. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#id DataKubernetesStorageClassV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.mountOptions">MountOptions</a></code> | <code>string[]</code> | Persistent Volumes that are dynamically created by a storage class will have the mount options specified. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The parameters for the provisioner that should create volumes of this storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.reclaimPolicy">ReclaimPolicy</a></code> | <code>string</code> | Indicates the type of the reclaim policy. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.volumeBindingMode">VolumeBindingMode</a></code> | <code>string</code> | Indicates when volume binding and dynamic provisioning should occur. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.metadata"></a>

```csharp
public DataKubernetesStorageClassV1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#metadata DataKubernetesStorageClassV1#metadata}

---

##### `AllowedTopologies`<sup>Optional</sup> <a name="AllowedTopologies" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowedTopologies"></a>

```csharp
public DataKubernetesStorageClassV1AllowedTopologies AllowedTopologies { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

allowed_topologies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#allowed_topologies DataKubernetesStorageClassV1#allowed_topologies}

---

##### `AllowVolumeExpansion`<sup>Optional</sup> <a name="AllowVolumeExpansion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.allowVolumeExpansion"></a>

```csharp
public object AllowVolumeExpansion { get; set; }
```

- *Type:* object

Indicates whether the storage class allow volume expand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#allow_volume_expansion DataKubernetesStorageClassV1#allow_volume_expansion}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#id DataKubernetesStorageClassV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.mountOptions"></a>

```csharp
public string[] MountOptions { get; set; }
```

- *Type:* string[]

Persistent Volumes that are dynamically created by a storage class will have the mount options specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#mount_options DataKubernetesStorageClassV1#mount_options}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The parameters for the provisioner that should create volumes of this storage class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#parameters DataKubernetesStorageClassV1#parameters}

---

##### `ReclaimPolicy`<sup>Optional</sup> <a name="ReclaimPolicy" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.reclaimPolicy"></a>

```csharp
public string ReclaimPolicy { get; set; }
```

- *Type:* string

Indicates the type of the reclaim policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#reclaim_policy DataKubernetesStorageClassV1#reclaim_policy}

---

##### `VolumeBindingMode`<sup>Optional</sup> <a name="VolumeBindingMode" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Config.property.volumeBindingMode"></a>

```csharp
public string VolumeBindingMode { get; set; }
```

- *Type:* string

Indicates when volume binding and dynamic provisioning should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#volume_binding_mode DataKubernetesStorageClassV1#volume_binding_mode}

---

### DataKubernetesStorageClassV1Metadata <a name="DataKubernetesStorageClassV1Metadata" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesStorageClassV1Metadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.name">Name</a></code> | <code>string</code> | Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the storage class that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#annotations DataKubernetesStorageClassV1#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the storage class.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#labels DataKubernetesStorageClassV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the storage class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/data-sources/storage_class_v1#name DataKubernetesStorageClassV1#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList <a name="DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.get"></a>

```csharp
private DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference <a name="DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataKubernetesStorageClassV1AllowedTopologiesOutputReference <a name="DataKubernetesStorageClassV1AllowedTopologiesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesStorageClassV1AllowedTopologiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.putMatchLabelExpressions">PutMatchLabelExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resetMatchLabelExpressions">ResetMatchLabelExpressions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchLabelExpressions` <a name="PutMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.putMatchLabelExpressions"></a>

```csharp
private void PutMatchLabelExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.putMatchLabelExpressions.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchLabelExpressions` <a name="ResetMatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.resetMatchLabelExpressions"></a>

```csharp
private void ResetMatchLabelExpressions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressions">MatchLabelExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressionsInput">MatchLabelExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchLabelExpressions`<sup>Required</sup> <a name="MatchLabelExpressions" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressions"></a>

```csharp
public DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList MatchLabelExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList">DataKubernetesStorageClassV1AllowedTopologiesMatchLabelExpressionsList</a>

---

##### `MatchLabelExpressionsInput`<sup>Optional</sup> <a name="MatchLabelExpressionsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.matchLabelExpressionsInput"></a>

```csharp
public object MatchLabelExpressionsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologiesOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesStorageClassV1AllowedTopologies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1AllowedTopologies">DataKubernetesStorageClassV1AllowedTopologies</a>

---


### DataKubernetesStorageClassV1MetadataOutputReference <a name="DataKubernetesStorageClassV1MetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesStorageClassV1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1MetadataOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesStorageClassV1Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesStorageClassV1.DataKubernetesStorageClassV1Metadata">DataKubernetesStorageClassV1Metadata</a>

---



