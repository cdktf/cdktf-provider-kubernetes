# `data_kubernetes_persistent_volume_claim`

Refer to the Terraform Registory for docs: [`data_kubernetes_persistent_volume_claim`](https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim).

# `dataKubernetesPersistentVolumeClaim` Submodule <a name="`dataKubernetesPersistentVolumeClaim` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesPersistentVolumeClaim <a name="DataKubernetesPersistentVolumeClaim" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim kubernetes_persistent_volume_claim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaim(Construct Scope, string Id, DataKubernetesPersistentVolumeClaimConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig">DataKubernetesPersistentVolumeClaimConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig">DataKubernetesPersistentVolumeClaimConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putMetadata"></a>

```csharp
private void PutMetadata(DataKubernetesPersistentVolumeClaimMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putSpec"></a>

```csharp
private void PutSpec(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.putSpec.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.resetSpec"></a>

```csharp
private void ResetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesPersistentVolumeClaim.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesPersistentVolumeClaim.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesPersistentVolumeClaim.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference">DataKubernetesPersistentVolumeClaimMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList">DataKubernetesPersistentVolumeClaimSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.specInput">SpecInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.metadata"></a>

```csharp
public DataKubernetesPersistentVolumeClaimMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference">DataKubernetesPersistentVolumeClaimMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.spec"></a>

```csharp
public DataKubernetesPersistentVolumeClaimSpecList Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList">DataKubernetesPersistentVolumeClaimSpecList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.metadataInput"></a>

```csharp
public DataKubernetesPersistentVolumeClaimMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.specInput"></a>

```csharp
public object SpecInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaim.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesPersistentVolumeClaimConfig <a name="DataKubernetesPersistentVolumeClaimConfig" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataKubernetesPersistentVolumeClaimMetadata Metadata,
    string Id = null,
    object Spec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#id DataKubernetesPersistentVolumeClaim#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.spec">Spec</a></code> | <code>object</code> | spec block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.metadata"></a>

```csharp
public DataKubernetesPersistentVolumeClaimMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#metadata DataKubernetesPersistentVolumeClaim#metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#id DataKubernetesPersistentVolumeClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimConfig.property.spec"></a>

```csharp
public object Spec { get; set; }
```

- *Type:* object

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#spec DataKubernetesPersistentVolumeClaim#spec}

---

### DataKubernetesPersistentVolumeClaimMetadata <a name="DataKubernetesPersistentVolumeClaimMetadata" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimMetadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.name">Name</a></code> | <code>string</code> | Name of the persistent volume claim, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.namespace">Namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the persistent volume claim must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#annotations DataKubernetesPersistentVolumeClaim#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#generate_name DataKubernetesPersistentVolumeClaim#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#labels DataKubernetesPersistentVolumeClaim#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the persistent volume claim, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#name DataKubernetesPersistentVolumeClaim#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace defines the space within which name of the persistent volume claim must be unique.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#namespace DataKubernetesPersistentVolumeClaim#namespace}

---

### DataKubernetesPersistentVolumeClaimSpec <a name="DataKubernetesPersistentVolumeClaimSpec" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimSpec {
    object Selector = null,
    string StorageClassName = null,
    string VolumeName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.selector">Selector</a></code> | <code>object</code> | selector block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.storageClassName">StorageClassName</a></code> | <code>string</code> | Name of the storage class requested by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.volumeName">VolumeName</a></code> | <code>string</code> | The binding reference to the PersistentVolume backing this claim. |

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.selector"></a>

```csharp
public object Selector { get; set; }
```

- *Type:* object

selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#selector DataKubernetesPersistentVolumeClaim#selector}

---

##### `StorageClassName`<sup>Optional</sup> <a name="StorageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.storageClassName"></a>

```csharp
public string StorageClassName { get; set; }
```

- *Type:* string

Name of the storage class requested by the claim.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#storage_class_name DataKubernetesPersistentVolumeClaim#storage_class_name}

---

##### `VolumeName`<sup>Optional</sup> <a name="VolumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpec.property.volumeName"></a>

```csharp
public string VolumeName { get; set; }
```

- *Type:* string

The binding reference to the PersistentVolume backing this claim.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#volume_name DataKubernetesPersistentVolumeClaim#volume_name}

---

### DataKubernetesPersistentVolumeClaimSpecResources <a name="DataKubernetesPersistentVolumeClaimSpecResources" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimSpecResources {

};
```


### DataKubernetesPersistentVolumeClaimSpecSelector <a name="DataKubernetesPersistentVolumeClaimSpecSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimSpecSelector {
    object MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.property.matchExpressions">MatchExpressions</a></code> | <code>object</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.property.matchExpressions"></a>

```csharp
public object MatchExpressions { get; set; }
```

- *Type:* object

match_expressions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#match_expressions DataKubernetesPersistentVolumeClaim#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#match_labels DataKubernetesPersistentVolumeClaim#match_labels}

---

### DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions <a name="DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#key DataKubernetesPersistentVolumeClaim#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#operator DataKubernetesPersistentVolumeClaim#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/persistent_volume_claim#values DataKubernetesPersistentVolumeClaim#values}

---

## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesPersistentVolumeClaimMetadataOutputReference <a name="DataKubernetesPersistentVolumeClaimMetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadataOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesPersistentVolumeClaimMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimMetadata">DataKubernetesPersistentVolumeClaimMetadata</a>

---


### DataKubernetesPersistentVolumeClaimSpecList <a name="DataKubernetesPersistentVolumeClaimSpecList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.get"></a>

```csharp
private DataKubernetesPersistentVolumeClaimSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataKubernetesPersistentVolumeClaimSpecOutputReference <a name="DataKubernetesPersistentVolumeClaimSpecOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetStorageClassName">ResetStorageClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetVolumeName">ResetVolumeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.putSelector"></a>

```csharp
private void PutSelector(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.putSelector.parameter.value"></a>

- *Type:* object

---

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```

##### `ResetStorageClassName` <a name="ResetStorageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetStorageClassName"></a>

```csharp
private void ResetStorageClassName()
```

##### `ResetVolumeName` <a name="ResetVolumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.resetVolumeName"></a>

```csharp
private void ResetVolumeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.accessModes">AccessModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList">DataKubernetesPersistentVolumeClaimSpecResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList">DataKubernetesPersistentVolumeClaimSpecSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.selectorInput">SelectorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.storageClassNameInput">StorageClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeNameInput">VolumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.storageClassName">StorageClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeName">VolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessModes`<sup>Required</sup> <a name="AccessModes" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.accessModes"></a>

```csharp
public string[] AccessModes { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.resources"></a>

```csharp
public DataKubernetesPersistentVolumeClaimSpecResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList">DataKubernetesPersistentVolumeClaimSpecResourcesList</a>

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.selector"></a>

```csharp
public DataKubernetesPersistentVolumeClaimSpecSelectorList Selector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList">DataKubernetesPersistentVolumeClaimSpecSelectorList</a>

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.selectorInput"></a>

```csharp
public object SelectorInput { get; }
```

- *Type:* object

---

##### `StorageClassNameInput`<sup>Optional</sup> <a name="StorageClassNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.storageClassNameInput"></a>

```csharp
public string StorageClassNameInput { get; }
```

- *Type:* string

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeNameInput"></a>

```csharp
public string VolumeNameInput { get; }
```

- *Type:* string

---

##### `StorageClassName`<sup>Required</sup> <a name="StorageClassName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.storageClassName"></a>

```csharp
public string StorageClassName { get; }
```

- *Type:* string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.volumeName"></a>

```csharp
public string VolumeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataKubernetesPersistentVolumeClaimSpecResourcesList <a name="DataKubernetesPersistentVolumeClaimSpecResourcesList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimSpecResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.get"></a>

```csharp
private DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference <a name="DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.limits">Limits</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.requests">Requests</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResources">DataKubernetesPersistentVolumeClaimSpecResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.limits"></a>

```csharp
public StringMap Limits { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.requests"></a>

```csharp
public StringMap Requests { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResourcesOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesPersistentVolumeClaimSpecResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecResources">DataKubernetesPersistentVolumeClaimSpecResources</a>

---


### DataKubernetesPersistentVolumeClaimSpecSelectorList <a name="DataKubernetesPersistentVolumeClaimSpecSelectorList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimSpecSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.get"></a>

```csharp
private DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList <a name="DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.get"></a>

```csharp
private DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference <a name="DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference <a name="DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressions"></a>

```csharp
public DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList">DataKubernetesPersistentVolumeClaimSpecSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public object MatchExpressionsInput { get; }
```

- *Type:* object

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesPersistentVolumeClaim.DataKubernetesPersistentVolumeClaimSpecSelectorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



